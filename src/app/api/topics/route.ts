import prisma from "@/config/data-source";
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const topics = await prisma.topic_count.findMany({});

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
