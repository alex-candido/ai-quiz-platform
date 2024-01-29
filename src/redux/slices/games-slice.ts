import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';

import getAllUserIdGamesActionAsync from '@/redux/actions/games/get-all-user-id-games';

export interface IGamesState {
  games: GameData[];
  game: GameData;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string | SerializedError;
}

const initialState: IGamesState = {
  games: [] as GameData[],
  game: {} as GameData,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllUserIdGamesActionAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getAllUserIdGamesActionAsync.fulfilled,
        (state, action: PayloadAction<GameData[]>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.games = action.payload;
        },
      )
      .addCase(getAllUserIdGamesActionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default gamesSlice.reducer;
