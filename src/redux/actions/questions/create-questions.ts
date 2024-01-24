import { api } from "@/lib/fetcher";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createQuestionsAsync = createAsyncThunk(
  'questions/getAllQuestionsAsync',
  async () => {
    const data = {
      name: 'Alex candido',
      description: 'aluno ifce',
      question: 'quantas pessoas voce mora na sua residencia(irmaos, pais, familiares, conhecidos) ?',
      answer: 'moro com meus pais',
    }

    const request = await api.post('/api/questions/', data);
    const response = await request.data
    return response;
  },
);
