import { api } from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTopicsActionAsync = createAsyncThunk(
  'topics/getAllTopicsActionAsync',
  async () => {
    const req = await api.get('/api/topics/');
    const res = await req.data;
    return res;
  },
);
