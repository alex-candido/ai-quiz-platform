import {
  createSlice,
  PayloadAction,
  SerializedError
} from '@reduxjs/toolkit';

import { createQuestionsActionAsync } from '@/redux/actions/questions/create-questions';

export interface IQuestionState {
  questions: QuestionData[];
  question: QuestionData;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string | SerializedError;
}

const initialState: IQuestionState = {
  questions: [] as QuestionData[],
  question: {} as QuestionData,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    getQuestion: (state, action: PayloadAction<QuestionData>) => {
      state.question = action.payload;
    },
    getAllQuestions: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createQuestionsActionAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        createQuestionsActionAsync.fulfilled,
        (state, action: PayloadAction<QuestionData>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.question = action.payload;
        },
      );
  },
});

export const { getQuestion, getAllQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
