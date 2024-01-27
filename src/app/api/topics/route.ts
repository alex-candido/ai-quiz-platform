import "reflect-metadata";

import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import '@/@server/shared/container/index';
import { GetServerAllTopicsRouter } from "@/@server/shared/infra/http/server";

export async function GET(req: Request, res: Response) {
  try {
    const getTopicsRouter = new GetServerAllTopicsRouter(req, res);
    const topics = await getTopicsRouter.get();

    return NextResponse.json(topics);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        },
      );
    } else if (error instanceof Error) {
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
