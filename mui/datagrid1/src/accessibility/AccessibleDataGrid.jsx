import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
];

const rows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 14 },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 31 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 31 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 11 },
];

export default function AccessibleDataGrid() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        // Add proper ARIA label and focus management
        ariaLabel="Accessible DataGrid Example"
        disableSelectionOnClick
        rowHeight={60}
        getRowId={(row) => row.id}
        componentsProps={{
          cell: {
            'aria-describedby': 'grid-cell',  // Adding aria-describedby for screen reader users
          },
          toolbar: {
            'aria-label': 'DataGrid Toolbar',  // Adding aria-label to toolbar
          },
        }}
      />
    </Box>
  );
}