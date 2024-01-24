import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import '@/@server/shared/container/index';

import { GetServerAllQuestionsRouter, PostServerQuestionsRouter } from '@/@server/shared/infra/http/server/';

export async function POST(req: Request, res: Response) {
  try {
    const postQuestionRouter = new PostServerQuestionsRouter(req, res);
    const question = await postQuestionRouter.post()

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

export async function GET(req: Request, res: Response) {
  try {
    const getQuestionsRouter = new GetServerAllQuestionsRouter(req, res);
    const questions = await getQuestionsRouter.get();

    return NextResponse.json(questions);
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
