import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';

import MCQ from "@/components/MCQ";
import prisma from "@/config/data-source";

interface McqPageProps {
  params: {
    gameId: string;
  };
}

export default async function McqPage({ params: { gameId } }:McqPageProps ) {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/");
  }

  const game = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: {
        select: {
          id: true,
          question: true,
          options: true,
        },
      },
    },
  });

  if (!game || game.gameType === "open_ended") {
    return redirect("/quiz");
  }

  return (
    <MCQ game={game} />
  );
}
