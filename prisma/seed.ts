// prisma/seed.ts
// Initialisation NON destructive : n'efface ni ne modifie jamais une donnée existante.
// Idempotent : plusieurs exécutions successives ne créent pas de doublons.
// Pour réinitialiser une base de test, voir prisma/seed-reset.ts (npm run db:seed:reset).

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

const prisma = createPrismaClient();

function logCreated(table: string, created: number, total: number) {
  logTable(table, `${created} créé(s), ${total - created} déjà présent(s) (ignoré(s))`);
}

export async function main() {
  console.log('[seed] Initialisation NON destructive : aucune donnée existante ne sera supprimée.');

  const passwordHash = await bcrypt.hash(requireEnv('ADMIN_SEED_PASSWORD'), 10);

  // Tables avec une contrainte d'unicité : skipDuplicates ignore les lignes déjà présentes
  // (User.email, NewsItem.slug / url, JobOffer.slug) sans jamais les modifier.
  const admins = buildAdmins(passwordHash);
  const users = await prisma.user.createMany({ data: admins, skipDuplicates: true });
  logCreated('User', users.count, admins.length);

  const news = buildNews();
  const newsResult = await prisma.newsItem.createMany({ data: news, skipDuplicates: true });
  logCreated('NewsItem', newsResult.count, news.length);

  const offers = buildJobOffers();
  const offersResult = await prisma.jobOffer.createMany({ data: offers, skipDuplicates: true });
  logCreated('JobOffer', offersResult.count, offers.length);

  // Tables sans clé naturelle (Testimonial, ReservationSlot) : aucun moyen fiable de détecter un
  // doublon, donc on n'insère les données de démonstration que si la table est vide.
  const testimonials = buildTestimonials();
  if ((await prisma.testimonial.count()) === 0) {
    const result = await prisma.testimonial.createMany({ data: testimonials });
    logCreated('Testimonial', result.count, testimonials.length);
  } else {
    logTable('Testimonial', `0 créé(s), table non vide : ${testimonials.length} ignoré(s)`);
  }

  const slots = buildDemoSlots();
  if ((await prisma.reservationSlot.count()) === 0) {
    const result = await prisma.reservationSlot.createMany({ data: slots });
    logCreated('ReservationSlot', result.count, slots.length);
  } else {
    logTable('ReservationSlot', `0 créé(s), table non vide : ${slots.length} ignoré(s)`);
  }
  // Reservation : jamais touchée par ce seed.
}

if (require.main === module) {
  main()
    .then(async () => {
      console.log('[seed] Initialisation terminée.');
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error('[seed] Échec de l’initialisation', e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
