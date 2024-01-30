import { api } from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllTopicsActionAsync = createAsyncThunk(
  'topics/getAllTopicsActionAsync',
  async () => {
    const url = `/api/topics/`;
    const { data } = await api.get(url);
    return data;
  },
);

export default getAllTopicsActionAsync;
