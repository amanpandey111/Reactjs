import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { enUS, deDE, frFR, esES } from '@mui/x-data-grid/locales'; // Importing predefined locales

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

export default function Localization1() {
  // State to store the selected locale (default to English US)
  const [locale, setLocale] = React.useState(enUS); // Default to English (US)

  // Handle locale change (change text and formatting based on locale)
  const changeLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {/* Buttons to switch between languages */}
      <div>
        <button onClick={() => changeLocale(enUS)}>English (US)</button>
        <button onClick={() => changeLocale(deDE)}>Deutsch (German)</button>
        <button onClick={() => changeLocale(frFR)}>Français (French)</button>
        <button onClick={() => changeLocale(esES)}>Español (Spanish)</button> {/* Spanish button */}
      </div>

      <DataGrid
        rows={rows}
        columns={columns}
        localeText={locale}  // Apply the selected locale (language & formatting)
        pageSize={5}
      />
    </Box>
  );
}
