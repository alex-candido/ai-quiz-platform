import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { getAllTopicsActionAsync } from '@/redux/actions/topics/get-all-topics';

export interface ITopicsState {
  topics: TopicsData[];
  topic: TopicsData;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string | SerializedError;
}

const initialState: ITopicsState = {
  topics: [] as TopicsData[],
  topic: {} as TopicsData,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllTopicsActionAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getAllTopicsActionAsync.fulfilled,
        (state, action: PayloadAction<TopicsData[]>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.topics = action.payload;
        },
      )
      .addCase(getAllTopicsActionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default topicsSlice.reducer;
