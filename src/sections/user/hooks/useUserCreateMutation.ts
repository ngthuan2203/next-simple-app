import { useMutation } from '@tanstack/react-query';
import { User } from '../types';
import UserService from '../service';

function useUserCreateMutation() {
  const { mutateAsync } = useMutation({
    mutationFn: async (payload: { user: User }) => {
      await UserService.create(payload.user);
    }
  });
  return { mutateAsync };
}

export default useUserCreateMutation;
