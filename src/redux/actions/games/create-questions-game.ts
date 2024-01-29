import { api } from '@/lib/api';

interface ICreateQuestionGameProps {
  topic: string,
  type: string,
  amount: number,
}

const createQuestionGameActionAsync = async ({
  topic,
  type,
  amount
}: ICreateQuestionGameProps): Promise<any> => {
  const url = `/api/game/`;
  const { data } = await api.post(url, { amount, topic, type });

  return data;
};

export default createQuestionGameActionAsync;
