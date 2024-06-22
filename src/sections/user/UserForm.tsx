'use client'
import React from 'react';
import FormProvider from '@/core-ui/hook-form/FormProvider';
import useUserEdit from './hooks/useUserEdit';
import { Button, Grid } from '@mui/material';
import FormControl from '@/core-ui/hook-form/FormControl';
import RHFTextField from '@/core-ui/hook-form/RHFTextField';
import { useTranslation } from 'react-i18next';
import AppDialog from '@/core-ui/dialog/AppDialog';
import useUserListQuery from './hooks/useUserListQuery';
import { User } from './types';
import useUserCreateMutation from './hooks/useUserCreateMutation';

type Props = {
    onClose: VoidFunction
}
export default function UserForm(props: Props) {
    const { onClose } = props;
    const {
        refetch
    } = useUserListQuery({ enabled: false });
    const {mutateAsync} = useUserCreateMutation();
    const { t } = useTranslation();
    const { methods } = useUserEdit();
    const handleCreate = async (user: User) => {
        await mutateAsync({user});
        refetch();
    }

    return (
        <AppDialog open={true} onClose={onClose} title={t('user.createUser')} >
            <FormProvider methods={methods} onSubmit={methods.handleSubmit(handleCreate)}>
                <Grid container padding={2} gap={2}>
                    <Grid item xs={12}>
                        <FormControl label={t('user.firstName')} require={true}>
                            <RHFTextField name="firstName"></RHFTextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl label={t('user.lastName')} require={true}>
                            <RHFTextField name="lastName"></RHFTextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl label={t('user.age')} require={true}>
                            <RHFTextField name="age"></RHFTextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl label={t('user.nationality')} require={true}>
                            <RHFTextField name="nationality"></RHFTextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} pt={2} >
                        <Button variant='contained' type='submit' disabled={!methods.formState.isValid}>{t('button.create')}</Button>
                        <Button sx={{ml: 2}} variant='contained' color='inherit' onClick={onClose}>{t('button.cancel')}</Button>
                    </Grid>
                </Grid>
            </FormProvider>
        </AppDialog>
    );
}
