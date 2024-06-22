'use client'

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { USER_KEYS } from '../queryKeys';
import { User } from '../types';
import UserService from '../service';

function useUserListQuery(configs?: {enabled: boolean}) {
  const key = [USER_KEYS.list()];
  const { data, isLoading, refetch } = useQuery<User[]>({
    queryKey: key,
    queryFn: async () => {
      const res = await UserService.getAll();
      return res.data?.data as User[];
    },
    enabled: configs?.enabled
  });
  return {
    data: data || [],
    isLoading,
    refetch
  };
}

export default useUserListQuery;
