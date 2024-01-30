import prisma from '@/config/data-source';

import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const userId = req.nextUrl.searchParams.get('userId');
    const limit = req.nextUrl.searchParams.get('limit');

    const games = await prisma.game.findMany({
      take: Number(limit),
      where: {
        userId: String(userId),
      },
      orderBy: {
        timeStarted: "desc",
      },
    })

    return NextResponse.json(games);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        },
      );
    } else {
      console.error('elle gpt error', error);
      return NextResponse.json(
        { error: 'An unexpected error occurred.' },
        {
          status: 500,
        },
      );
    }
  }
}
