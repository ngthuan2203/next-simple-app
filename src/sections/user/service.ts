import { ResponseFormat } from '@/shared/axios';
import instance from '@/shared/axios/instant';
import { User } from './types';

const apiUrl = process.env.NEXT_PUBLIC_HOST_API_URL;

const getAll = async (): Promise<ResponseFormat<User[]>> => {
  return instance.get(apiUrl + 'user');
};

const create = async (user: User): Promise<ResponseFormat<any>> => {
  return instance.post(apiUrl + 'user', user);
};

const UserService = {
  getAll,
  create
};

export default UserService;
