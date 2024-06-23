import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useUserCreateMutation from './useUserCreateMutation';
import { User } from '../types';

function useUserEdit() {
  const { t } = useTranslation();

  const { mutateAsync: createUser } = useUserCreateMutation();
  const yupSchema = Yup.object().shape({
    id: Yup.string(),
    firstName: Yup.string().required(t('validation.require', { field: t('user.firstName') })),
    lastName: Yup.string().required(t('validation.require', { field: t('user.lastName') })),
    age: Yup.number()
      .min(18, t('validation.min', { value: 18 }))
      .typeError(t('validation.number'))
      .required(t('validation.require', { field: t('user.age') })),
    nationality: Yup.string().required(t('validation.require', { field: t('user.nationality') }))
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    age: undefined,
    nationality: ''
  };
  const methods = useForm<User>({
    defaultValues: defaultValues,
    resolver: yupResolver<User>(yupSchema),
    mode: 'all'
  });

  const handleCreate = async () => {
    const data = methods.getValues();
    await createUser({ user: data as User });
  };

  return {
    methods,
    handleCreate
  };
}

export default useUserEdit;
