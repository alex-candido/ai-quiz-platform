import { api } from "@/lib/fetcher";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTopicsActionAsync = createAsyncThunk(
  'questions/getAllQuestionsAsync',
  async () => {
    const request = await api.get('/api/topics/');
    const response = await request.data;
    return response;
  },
);
