'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type TableProps<T> = {
  rows: T[];
  columns: GridColDef[];
};
export default function DataTable<T>(props: TableProps<T>) {
  const { rows, columns } = props;
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      rowSelection={false}
      disableColumnSelector
      checkboxSelection={false}
      disableColumnSorting
      disableColumnMenu
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 }
        }
      }}
      sx={{
        boxShadow: 2,
        border: 2,
        borderColor: 'primary.light'
      }}
      pageSizeOptions={[5, 10, 50]}
    />
  );
}
