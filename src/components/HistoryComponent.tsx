'use client';

import { useEffect, useState } from 'react';

import { Clock, CopyCheck, Edit2 } from 'lucide-react';
import Link from 'next/link';

import getAllUserIdGamesActionAsync from '@/redux/actions/games/get-all-user-id-games';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';

interface HistoryComponentProps {
  limit: number;
  userId: string;
}

const HistoryComponent: React.FC<HistoryComponentProps> = ({
  limit,
  userId,
}) => {
  const [games, setGames] = useState<GameData[]>([]);

  const dispatch = useAppDispatch();
  const gamesState = useAppSelector((state: RootState) => state.games);

  useEffect(() => {
    dispatch(getAllUserIdGamesActionAsync({ userId, limit }));
    setGames(gamesState.games);
  }, [dispatch]);

  return (
    <div className="space-y-8">
      {games.map((game: GameData) => {
        return (
          <div className="flex items-center justify-between" key={game.id}>
            <div className="flex items-center">
              {game.gameType === 'mcq' ? (
                <CopyCheck className="mr-3" />
              ) : (
                <Edit2 className="mr-3" />
              )}
              <div className="ml-4 space-y-1">
                <Link
                  className="text-base font-medium leading-none underline"
                  href={`/statistics/${game.id}`}
                >
                  {game.topic}
                </Link>
                <p className="flex items-center px-2 py-1 text-xs text-white rounded-lg w-fit bg-slate-800">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(game.timeEnded ?? 0).toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground">
                  {game.gameType === 'mcq' ? 'Multiple Choice' : 'Open-Ended'}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryComponent;
