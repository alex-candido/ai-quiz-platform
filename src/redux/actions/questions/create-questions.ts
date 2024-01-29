import { api } from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createQuestionsActionAsync = createAsyncThunk(
  'questions/getAllQuestionsAsync',
  async () => {
    const data = {
      name: 'Alex candido',
      description: 'aluno ifce',
      question: 'quantas pessoas voce mora na sua residencia(irmaos, pais, familiares, conhecidos) ?',
      answer: 'moro com meus pais',
    }

    const req = await api.post('/api/questions/', data);
    return await req.data;
  },
);

export default createQuestionsActionAsync;
