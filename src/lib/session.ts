import { authOptions } from '@/@server/config/next-auth';
import {
  getServerSession
} from 'next-auth';

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
