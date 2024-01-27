import { getAuthSession } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";

import HistoryComponent from "@/components/HistoryComponent";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecentActivityCard = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }

  // implement redux
  const games_count = "";

  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </CardTitle>
        <CardDescription>
          You have played a total of {games_count} quizzes.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        <HistoryComponent limit={10} userId={session.user.id} />
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
