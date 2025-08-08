import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { enUS, deDE, frFR } from '@mui/x-data-grid/locales';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Localization() {
  // State to store the selected locale (default to enUS)
  const [locale, setLocale] = React.useState(enUS);

  // Handle locale change (example with hardcoded locales)
  const changeLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {/* Locale Switch */}
      <div>
        <button onClick={() => changeLocale(enUS)}>English (US)</button>
        <button onClick={() => changeLocale(deDE)}>Deutsch (German)</button>
        <button onClick={() => changeLocale(frFR)}>Français (French)</button>
      </div>

      <DataGrid
        rows={rows}
        columns={columns}
        localeText={locale}  // Apply selected locale here
        pageSize={5}
        checkboxSelection
      />
    </Box>
  );
}
