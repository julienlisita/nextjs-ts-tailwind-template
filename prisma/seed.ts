// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function main() {
  // Liste des admins à créer
  const admins = [
    { email: 'admin1@example.com', name: 'Admin One', password: 'ChangeMe123!' },
    { email: 'admin2@example.com', name: 'Admin Two', password: 'ChangeMe123!' },
    { email: 'admin3@example.com', name: 'Admin Three', password: 'ChangeMe123!' },
  ];

  for (const admin of admins) {
    const passwordHash = await bcrypt.hash(admin.password, 10);

    await prisma.user.upsert({
      where: { email: admin.email },
      update: {},
      create: {
        email: admin.email,
        password: passwordHash,
        name: admin.name,
        role: 'admin',
      },
    });
  }
  await prisma.testimonial.deleteMany();

  const testimonialsData = [
    {
      name: 'Lesly Dupont',
      role: 'Cliente',
      company: 'Compagnie Care Services',
      quote:
        'Une équipe professionnelle et à l’écoute, qui a su répondre parfaitement à nos attentes. Le site reflète notre image avec élégance.',
      rating: 5, // Decimal en base, number côté JS/TS : OK
      avatarUrl: '/images/clients/lesly.jpg',
      displayDate: 'Août 2025',
      highlight: true,
      variant: 'default',
      isPublished: true,
      publishedAt: new Date('2025-08-10T10:00:00Z'),
    },
    {
      name: 'Marc Lambert',
      role: 'Gérant',
      company: 'Agence LM Nettoyage',
      quote:
        'Travail rapide et soigné. Le design est clair, la navigation fluide — c’est exactement ce qu’il nous fallait.',
      rating: 4.5,
      displayDate: 'Juillet 2025',
      highlight: false,
      variant: 'default',
      isPublished: true,
      publishedAt: new Date('2025-07-15T09:00:00Z'),
    },
    {
      name: 'Sophie Martin',
      role: 'Fondatrice',
      company: 'Bien-Être & Santé',
      quote:
        'Julien a compris nos besoins et livré un site moderne, efficace et simple à maintenir.',
      rating: 5,
      avatarUrl: '/images/clients/sophie.jpg',
      displayDate: 'Juin 2025',
      highlight: false,
      variant: 'default',
      isPublished: true,
      publishedAt: new Date('2025-06-20T09:00:00Z'),
    },
    {
      name: 'Antoine Rivière',
      role: 'Responsable communication',
      company: 'StartUp Bordeaux',
      quote: 'Excellent sens du détail, très réactif. Le résultat final dépasse nos attentes.',
      rating: 4,
      displayDate: 'Mai 2025',
      highlight: false,
      variant: 'default',
      isPublished: true,
      publishedAt: new Date('2025-05-12T09:00:00Z'),
    },
    {
      name: 'Claire Dubois',
      role: 'Coach sportive',
      quote:
        'Le site inspire confiance. Mes clientes trouvent l’information tout de suite, et mes RDV ont augmenté.',
      rating: 5,
      avatarUrl: '/images/clients/claire.jpg',
      displayDate: 'Mars 2025',
      highlight: false,
      variant: 'compact',
      isPublished: true,
      publishedAt: new Date('2025-03-05T09:00:00Z'),
    },
    {
      name: 'Hugo Bernard',
      role: 'Entrepreneur',
      company: 'HB Consulting',
      quote:
        'Grande capacité d’écoute, réalisation propre et performante. Je recommande sans hésiter.',
      rating: 4.5,
      displayDate: 'Février 2025',
      highlight: false,
      variant: 'horizontal',
      isPublished: true,
      publishedAt: new Date('2025-02-18T09:00:00Z'),
    },
  ];
  await prisma.testimonial.createMany({
    data: testimonialsData,
  });

   await prisma.newsItem.deleteMany();

  const newsItemsData = [
    {
      slug: 'aide-a-domicile-nouveaux-dispositifs',
      title: "Aide à domicile : les nouveaux dispositifs d'accompagnement",
      description:
        'Un article sur les évolutions récentes concernant l’aide à domicile en France.',
      source: 'Service-public.fr',
      url: 'https://www.service-public.fr/particuliers/actualites/A17123',
      displayDate: '5 août 2025',
      isPublished: true,
      publishedAt: new Date('2025-08-05T08:00:00Z'),
      coverImage: null,
    },
    {
      slug: 'revalorisation-metier-auxiliaire-de-vie',
      title: 'Revalorisation du métier d’auxiliaire de vie',
      description:
        'Zoom sur les nouvelles mesures pour améliorer les conditions de travail dans le secteur.',
      source: 'Santé Magazine',
      url: 'https://www.santemagazine.fr/actualites/auxiliaires-de-vie-revalorisation-emploi',
      displayDate: '28 juillet 2025',
      isPublished: true,
      publishedAt: new Date('2025-07-28T08:00:00Z'),
      coverImage: null,
    },
    {
      slug: 'ccs-intervention-angouleme',
      title: 'CCS en action : retour sur notre intervention à Angoulême',
      description:
        'Découvrez notre dernier accompagnement personnalisé dans le cadre d’une aide à domicile renforcée.',
      source: 'Company Care Service',
      url: 'https://www.exemple.com/actualites/intervention-angouleme',
      displayDate: '20 juillet 2025',
      isPublished: true,
      publishedAt: new Date('2025-07-20T08:00:00Z'),
      coverImage: null,
    },
    {
      slug: 'plan-canicule-conseils-aidants',
      title: 'Plan canicule : conseils essentiels pour les aidants',
      description:
        'Checklist de prévention et gestes à adopter auprès des personnes fragiles pendant les fortes chaleurs.',
      source: 'Santé publique France',
      url: 'https://www.santepubliquefrance.fr/determinants-de-sante/climat/chaleurs-intenses',
      displayDate: '15 juillet 2025',
      isPublished: true,
      publishedAt: new Date('2025-07-15T08:00:00Z'),
      coverImage: null,
    },
    {
      slug: 'aides-financieres-apa-2025',
      title: 'Quelles aides financières pour rester à domicile en 2025 ?',
      description:
        "Panorama des dispositifs (APA, aides CAF, caisses de retraite) pour l'aide à domicile.",
      source: 'Service-public.fr',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F10009',
      displayDate: '10 juillet 2025',
      isPublished: true,
      publishedAt: new Date('2025-07-10T08:00:00Z'),
      coverImage: null,
    },
    {
      slug: 'prevention-chutes-domicile',
      title: 'Prévention des chutes à domicile : 7 réflexes simples',
      description:
        'Aménagements et bonnes pratiques pour sécuriser le quotidien des seniors.',
      source: 'Assurance Maladie',
      url: 'https://www.ameli.fr/assure/sante/themes/prevention-des-chutes',
      displayDate: '1 juillet 2025',
      isPublished: true,
      publishedAt: new Date('2025-07-01T08:00:00Z'),
      coverImage: null,
    },
    {
      slug: 'aidants-proches-droits-repit',
      title: 'Aidants proches : vos droits au répit',
      description:
        'Solutions de répit et démarches pour les aidants familiaux : ce que dit la loi.',
      source: 'Service-public.fr',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F34332',
      displayDate: '25 juin 2025',
      isPublished: true,
      publishedAt: new Date('2025-06-25T08:00:00Z'),
      coverImage: null,
    },
  ];

  await prisma.newsItem.createMany({ data: newsItemsData });
}

if (require.main === module) {
  main()
    .then(async () => {
      console.log('Seed des admins terminé');
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error('Échec du seed', e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
