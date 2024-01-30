import "reflect-metadata";

import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import '@/@server/shared/container/index';

import { getAuthSession } from "@/@server/config/next-auth";
import { PostServerQuestionsRouter } from '@/@server/shared/infra/http/server/';

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to create a game." },
        {
          status: 401,
        }
      );
    }

    const postQuestionRouter = new PostServerQuestionsRouter(req, res);
    const questions = await postQuestionRouter.post()

    console.log(questions)

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
