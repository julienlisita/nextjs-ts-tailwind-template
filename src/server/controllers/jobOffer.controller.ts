// src/server/controllers/jobOffer.controller.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function getAllJobOffersHandler() {
  const jobOffers = await prisma.jobOffer.findMany({
    orderBy: { publishedAt: 'desc' },
  });

  return NextResponse.json({ jobOffers });
}

export async function createJobOfferHandler(req: NextRequest) {
  try {
    const { title, location, description } = await req.json();
    if (!title || !location || !description) {
      return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 });
    }
    const newOffer = await prisma.jobOffer.create({
      data: {
        title,
        location,
        description,
        publishedAt: new Date(),
      },
    });
    return NextResponse.json({ message: 'Offre créée', offer: newOffer }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}

export async function updateJobOfferHandler(req: NextRequest, idParam: string) {
  try {
    const id = Number(idParam);
    if (Number.isNaN(id)) {
      return NextResponse.json({ message: 'ID invalide' }, { status: 400 });
    }

    const body = await req.json();
    const data: Partial<{ title: string; location: string; description: string }> = {};

    if (typeof body.title === 'string') data.title = body.title;
    if (typeof body.location === 'string') data.location = body.location;
    if (typeof body.description === 'string') data.description = body.description;

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ message: 'Aucune donnée à mettre à jour' }, { status: 400 });
    }

    const offer = await prisma.jobOffer.update({
      where: { id },
      data,
    });

    return NextResponse.json({ message: 'Offre mise à jour', offer });
  } catch (error: any) {
    // Si l'ID n’existe pas
    if (error?.code === 'P2025') {
      return NextResponse.json({ message: 'Offre introuvable' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}

export async function deleteJobOfferHandler(req: NextRequest, idParam: string) {
  try {
    const id = Number(idParam);
    if (Number.isNaN(id)) {
      return NextResponse.json({ message: 'ID invalide' }, { status: 400 });
    }

    await prisma.jobOffer.delete({ where: { id } });
    return NextResponse.json({ message: 'Offre supprimée' }, { status: 200 });
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return NextResponse.json({ message: 'Offre introuvable' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}
