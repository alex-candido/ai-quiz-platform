import "reflect-metadata";

import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import '@/@server/shared/container/index';

import { PostServerQuestionsRouter } from '@/@server/shared/infra/http/server/';

export async function POST(req: Request, res: Response) {
  try {
    const postQuestionRouter = new PostServerQuestionsRouter(req, res);
    const questions = await postQuestionRouter.post()

    return NextResponse.json(
      {
        questions: questions,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        }
      );
    } else {
      console.error("elle gpt error", error);
      return NextResponse.json(
        { error: "An unexpected error occurred." },
        {
          status: 500,
        }
      );
    }
  }
}
