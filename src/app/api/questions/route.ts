import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { PostServerQuestionsRouter } from '@/@server/shared/infra/http/routes';

export async function POST(req: Request, res: Response) {
  try {
    const postQuestionsRouter = new PostServerQuestionsRouter(req, res);
    return NextResponse.json(await postQuestionsRouter.post());
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
