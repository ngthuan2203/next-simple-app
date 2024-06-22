'use client'

import React, {useMemo, useState } from 'react';
import useUserListQuery from './hooks/useUserListQuery';
import DataTable from '@/core-ui/table/table';
import { User } from './types';
import { GridColDef } from '@mui/x-data-grid';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UserForm from './UserForm';

export default function UserList() {
    const {t} = useTranslation();
    const {
        data
    } = useUserListQuery();

    const [showForm, setShowForm] = useState(false);

    const columns: GridColDef[] = useMemo(() => ([
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'nationality',
            headerName: 'Nationality',
            type: 'string',
            width: 90,
        },
    ]), [])

    return (
        <>
            <Stack flexDirection='row' py={2}><Button variant='contained' onClick={() => setShowForm(true)}>{t('button.create')}</Button></Stack>
            <DataTable rows={data as User[] || []} columns={columns}></DataTable>
            {showForm && <UserForm onClose={() => setShowForm(false)} />}
        </>
    );
}
