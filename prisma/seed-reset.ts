// prisma/seed-reset.ts
// RÉINITIALISATION DESTRUCTIVE d'une base de test : supprime TOUTES les données (y compris User
// et Reservation) puis réinjecte les données de démonstration.
// Jamais lancé automatiquement (ni par `prisma db seed`, ni par SEED_ON_BUILD).
// Usage : npm run db:seed:reset -- --confirm-reset

import bcrypt from 'bcryptjs';
import {
  buildAdmins,
  buildDemoSlots,
  buildJobOffers,
  buildNews,
  buildTestimonials,
  createPrismaClient,
  logTable,
  requireEnv,
} from './seed-shared';

const LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]'];

/** Refuse l'exécution hors d'une base locale explicitement confirmée. N'affiche jamais d'identifiants. */
function assertSafeTarget() {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Refusé : NODE_ENV=production.');
  }

  let url: URL;
  try {
    url = new URL(requireEnv('DATABASE_URL'));
  } catch {
    throw new Error('Refusé : DATABASE_URL absente ou illisible.');
  }

  const target = `${url.hostname}${url.port ? `:${url.port}` : ''}${url.pathname}`;
  const allowedHost = process.env.SEED_RESET_ALLOWED_HOST;

  if (!LOCAL_HOSTS.includes(url.hostname) && url.hostname !== allowedHost) {
    throw new Error(
      `Refusé : la base cible (${target}) n'est pas locale. ` +
        'Pour une base de test distante, définir SEED_RESET_ALLOWED_HOST avec son hôte exact.'
    );
  }

  if (!process.argv.includes('--confirm-reset')) {
    throw new Error(
      `Refusé : ce script supprime toutes les données de ${target}. ` +
        'Relancer avec : npm run db:seed:reset -- --confirm-reset'
    );
  }

  return target;
}

async function main() {
  const target = assertSafeTarget();
  const passwordHash = await bcrypt.hash(requireEnv('ADMIN_SEED_PASSWORD'), 10);

  const prisma = createPrismaClient();
  try {
    console.log(`[seed:reset] RÉINITIALISATION DESTRUCTIVE de la base de test ${target}`);

    const admins = buildAdmins(passwordHash);
    const testimonials = buildTestimonials();
    const news = buildNews();
    const offers = buildJobOffers();
    const slots = buildDemoSlots();

    // Une seule transaction : suppression dans l'ordre des clés étrangères
    // (Reservation → ReservationSlot), puis réinsertion. Tout ou rien.
    const [delReservations, delSlots, delTestimonials, delNews, delOffers, delUsers, ...created] =
      await prisma.$transaction([
        prisma.reservation.deleteMany(),
        prisma.reservationSlot.deleteMany(),
        prisma.testimonial.deleteMany(),
        prisma.newsItem.deleteMany(),
        prisma.jobOffer.deleteMany(),
        prisma.user.deleteMany(),
        prisma.user.createMany({ data: admins }),
        prisma.testimonial.createMany({ data: testimonials }),
        prisma.newsItem.createMany({ data: news }),
        prisma.jobOffer.createMany({ data: offers }),
        prisma.reservationSlot.createMany({ data: slots }),
      ]);
    const [cUsers, cTestimonials, cNews, cOffers, cSlots] = created;

    logTable('Reservation', `${delReservations.count} supprimé(s)`);
    logTable('ReservationSlot', `${delSlots.count} supprimé(s), ${cSlots.count} créé(s)`);
    logTable('Testimonial', `${delTestimonials.count} supprimé(s), ${cTestimonials.count} créé(s)`);
    logTable('NewsItem', `${delNews.count} supprimé(s), ${cNews.count} créé(s)`);
    logTable('JobOffer', `${delOffers.count} supprimé(s), ${cOffers.count} créé(s)`);
    logTable('User', `${delUsers.count} supprimé(s), ${cUsers.count} créé(s)`);

    console.log('[seed:reset] Réinitialisation terminée.');
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error('[seed:reset] Échec :', e instanceof Error ? e.message : e);
  process.exit(1);
});
