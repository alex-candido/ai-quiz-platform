import OpenEnded from "@/components/OpenEnded";
import prisma from "@/config/data-source";
import { getAuthSession } from "@/config/next-auth";
import { redirect } from "next/navigation";

interface OpenEndedPageProps {
  params: {
    gameId: string;
  };
}

export default async function OpenEndedPage({ params: { gameId } }: OpenEndedPageProps) {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
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
          answer: true,
        },
      },
    },
  });

  if (!game || game.gameType === "mcq") {
    return redirect("/quiz");
  }

  return (
    <OpenEnded game={game} />
  );
}
