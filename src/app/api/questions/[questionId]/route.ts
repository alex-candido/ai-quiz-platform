import "reflect-metadata";

import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import '@/@server/shared/container/index';

import { GetServerIdQuestionsRouter } from '@/@server/shared/infra/http/server';

export async function GET(
  req: Request,
  { params }: { params: { questionId: string } },
) {
  try {
    const { questionId } = params;
    const getQuestionRouter = new GetServerIdQuestionsRouter(req, {
      questionId,
    });
    const question = await getQuestionRouter.get();
    return NextResponse.json(question);
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
