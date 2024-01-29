'use client';

import { useQuery } from '@tanstack/react-query';
import { Session } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import HistoryComponent from '@/components/HistoryComponent';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import getAllGameCountActionAsync from '@/redux/actions/games/get-all-games-count';

interface RecentActivityCardProps {
  session: Session;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({ session }) => {
  if (!session?.user) {
    return redirect('/');
  }

  const { data: games_count } = useQuery({
    queryKey: ['gamesCount'],
    queryFn: async () =>
      getAllGameCountActionAsync({ userId: session.user.id }),
  });

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
