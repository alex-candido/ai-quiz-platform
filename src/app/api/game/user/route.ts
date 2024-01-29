import 'reflect-metadata';

import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import '@/@server/shared/container/index';
import { GetServerUserIdGamesRouter } from '@/@server/shared/infra/http/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const getUserIdGamesRouter = new GetServerUserIdGamesRouter(req, res);
    const games = await getUserIdGamesRouter.get();

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
