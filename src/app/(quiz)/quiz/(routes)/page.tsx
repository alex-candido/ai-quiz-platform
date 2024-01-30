import QuizCreation from "@/components/forms/QuizCreation";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface QuizPageProps {
  searchParams: {
    topic?: string;
  };
}

export default async function QuizPage({ searchParams }: QuizPageProps) {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <QuizCreation topic={searchParams.topic ?? ""} />
  );
}
