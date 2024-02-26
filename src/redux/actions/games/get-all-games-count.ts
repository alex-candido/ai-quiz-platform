import { api } from '@/lib/api';

interface IGetAllGameCountProps {
  userId: string;
}

const getAllGameCountActionAsync = async ({
  userId,
}: IGetAllGameCountProps): Promise<number> => {
  const url = `/api/game/count?userId=${userId}`;
  const { data } = await api.get(url);

  return data;
};

export default getAllGameCountActionAsync;
