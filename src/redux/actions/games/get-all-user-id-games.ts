import { api } from '@/lib/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IGetAllGameCountProps {
  userId: string;
}

const getAllUserIdGamesActionAsync = createAsyncThunk(
  'games/getAllUserIdGamesAsync',
  async ({ userId }: IGetAllGameCountProps) => {
    const url = `/api/game/user/${userId}`;
    const { data } = await api.get(url);

    return data;
  },
);

export default getAllUserIdGamesActionAsync;
