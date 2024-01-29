import 'reflect-metadata';

import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import '@/@server/shared/container/index';

import { GetServerIdGamesCountRouter } from '@/@server/shared/infra/http/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const getGamesCountRouter = new GetServerIdGamesCountRouter(req, res);

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
