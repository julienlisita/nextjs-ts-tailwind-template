// src/server/controllers/jobOffer.controller.ts

import { NextRequest, NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';

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
        }
    catch(error)
    {
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
    }