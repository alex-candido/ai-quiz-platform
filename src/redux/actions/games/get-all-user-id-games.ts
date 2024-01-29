import { api } from '@/lib/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IGetAllGameCountProps {
  userId: string;
  limit: number;
}

const getAllUserIdGamesActionAsync = createAsyncThunk(
  'games/getAllUserIdGamesAsync',
  async ({ userId, limit }: IGetAllGameCountProps) => {
    const url = `/api/game/user/?userId=${userId}&limit=${limit}`;
    const { data } = await api.get(url);

    return data;
  },
);

export default getAllUserIdGamesActionAsync;
