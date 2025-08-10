// src/app/api/job-offers/[id]/route.ts

import { NextRequest } from 'next/server';
import { updateJobOfferHandler, deleteJobOfferHandler } from '@/server/controllers/jobOffer.controller';
import { ensureAdmin } from '@/server/middlewares/withAuth';

export async function PUT(req: NextRequest, ctx: { params:  Promise<{ id: string }> }) 
{
    const { id } = await ctx.params;
    const guard = await ensureAdmin(req);
    if (guard) return guard;
    return updateJobOfferHandler(req, id);
}

export async function DELETE(req: NextRequest, ctx: { params:  Promise<{ id: string }> }) 
{
    const { id } = await ctx.params;
    const guard = await ensureAdmin(req);
    if (guard) return guard;
    return deleteJobOfferHandler(req, id);
}