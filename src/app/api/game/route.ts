import { NextResponse } from 'next/server';
import { z } from 'zod';

import prisma from '@/config/data-source';
import { strict_output } from '@/config/gpt-souce';
import { getAuthSession } from '@/config/next-auth';
import { quizCreationSchema } from '@/schemas/forms/quiz';

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'You must be logged in to create a game.' },
        {
          status: 401,
        },
      );
    }
    const body = await req.json();
    const { topic, type, amount } = quizCreationSchema.parse(body);

    const game = await prisma.game.create({
      data: {
        gameType: type,
        timeStarted: new Date(),
        userId: session.user.id,
        topic,
      },
    });

    await prisma.topic_count.upsert({
      where: {
        topic,
      },
      create: {
        topic,
        count: 1,
      },
      update: {
        count: {
          increment: 1,
        },
      },
    });

    // const { data } = await api.post(`/api/questions/`,
    //   {
    //     amount,
    //     topic,
    //     type,
    //   }
    // );

    let questions: any;
    if (type === "open_ended") {
      questions = await strict_output(
        "You are a helpful AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array format",
        new Array(amount).fill(
          `You are to generate a random hard open-ended questions about ${topic}`
        ),
        {
          question: "question",
          answer: "answer with max length of 15 words",
        }
      );
    } else if (type === "mcq") {
      questions = await strict_output(
        "You are a helpful AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words, store all answers and questions and options in a JSON array",
        new Array(amount).fill(
          `You are to generate a random hard mcq question about ${topic}`
        ),
        {
          question: "question",
          answer: "answer with max length of 15 words",
          option1: "option1 with max length of 15 words",
          option2: "option2 with max length of 15 words",
          option3: "option3 with max length of 15 words",
        }
      );
    }

    if (type === 'mcq') {
      type mcqQuestion = {
        question: string;
        answer: string;
        option1: string;
        option2: string;
        option3: string;
      };

      const manyData = questions.map((question: mcqQuestion) => {
        // mix up the options lol
        const options = [
          question.option1,
          question.option2,
          question.option3,
          question.answer,
        ].sort(() => Math.random() - 0.5);
        return {
          question: question.question,
          answer: question.answer,
          options: JSON.stringify(options),
          gameId: game.id,
          questionType: 'mcq',
        };
      });

      await prisma.question.createMany({
        data: manyData,
      });
    } else if (type === 'open_ended') {
      type openQuestion = {
        question: string;
        answer: string;
      };
      await prisma.question.createMany({
        data: questions.map((question: openQuestion) => {
          return {
            question: question.question,
            answer: question.answer,
            gameId: game.id,
            questionType: 'open_ended',
          };
        }),
      });
    }

    console.log(questions);

    return NextResponse.json({ gameId: game.id }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        },
      );
    } else {
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
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'You must be logged in to create a game.' },
        {
          status: 401,
        },
      );
    }
    const url = new URL(req.url);
    const gameId = url.searchParams.get('gameId');
    if (!gameId) {
      return NextResponse.json(
        { error: 'You must provide a game id.' },
        {
          status: 400,
        },
      );
    }

    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
      include: {
        questions: true,
      },
    });
    if (!game) {
      return NextResponse.json(
        { error: 'Game not found.' },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      { game },
      {
        status: 400,
      },
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      {
        status: 500,
      },
    );
  }
}