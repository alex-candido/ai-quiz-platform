import 'reflect-metadata';

import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import '@/@server/shared/container/index';

import { GetServerIdGamesCountRouter } from '@/@server/shared/infra/http/server';

export async function GET(
  req: Request,
  { params }: { params: { userId: string } },
) {
  try {
    const { userId } = params;
    const getGamesCountRouter = new GetServerIdGamesCountRouter(req, {
      userId,
    });
    const games_count = await getGamesCountRouter.get();

    return NextResponse.json(games_count);
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
