import { api } from '@/lib/api';

interface ICreateQuestionGameProps {
  topic: string,
  type: string,
  amount: number,
}

const createQuestionsActionAsync = async ({
  topic,
  type,
  amount
}: ICreateQuestionGameProps): Promise<any> => {
  const url = `/api/questions/`;
  const { data } = await api.post(url, { amount, topic, type });

  return data;
};

export default createQuestionsActionAsync;
