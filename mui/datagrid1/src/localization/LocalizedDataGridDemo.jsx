import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// Corrected import path for esES
import { esES } from '@mui/x-data-grid/locales'; // <-- CHANGE THIS LINE
// If the above doesn't work (less common for recent versions), try:
// import { esES } from '@mui/x-data-grid/utils/locales';


// Define the custom Spanish localization texts directly in this file
const customEsES = {
  // Use the defaultProps.localeText from the imported esES object
  ...esES.components.MuiDataGrid.defaultProps.localeText,
  // Override specific texts as needed
  noRowsLabel: 'No hay filas para mostrar',
  filterPanelOperatorAnd: 'Y',
  filterPanelOperatorOr: 'O',
  toolbarPaginationRowsPerPage: 'Filas por página:',
  toolbarPaginationRangeText: ({ from, to, count }) =>
    `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`,

  filterPanelColumns: 'Columnas',
  filterPanelOperators: 'Operadores',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Filtrar valor',
  filterPanelActions: 'Acciones',
  filterOperatorContains: 'contiene',
  filterOperatorEquals: 'es igual a',
  filterOperatorStartsWith: 'empieza por',
  filterOperatorEndsWith: 'termina por',
  filterOperatorIs: 'es',
  filterOperatorNot: 'no es',
  filterOperatorAfter: 'es posterior a',
  filterOperatorBefore: 'es anterior a',
  filterOperatorOnOrAfter: 'es igual o posterior a',
  filterOperatorOnOrBefore: 'es igual o anterior a',
  filterOperatorIsEmpty: 'está vacío',
  filterOperatorIsNotEmpty: 'no está vacío',
  filterOperatorIsAnyOf: 'es cualquiera de',
};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Apellido',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Edad',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'salary',
    headerName: 'Salario',
    type: 'number',
    width: 150,
    editable: true,
    valueFormatter: (value) => {
        if (value === null) return '';
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
    },
  },
  {
    field: 'startDate',
    headerName: 'Fecha de Inicio',
    type: 'date',
    width: 180,
    editable: true,
    valueFormatter: (value) => {
      if (!value) return '';
      const date = value instanceof Date ? value : new Date(value);
      return new Intl.DateTimeFormat('es-ES').format(date);
    },
  },
  {
    field: 'fullName',
    headerName: 'Nombre Completo',
    description: 'Esta columna tiene un getter de valor y no es ordenable.',
    sortable: false,
    width: 200,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Nieve', firstName: 'Juan', age: 14, salary: 50000, startDate: new Date('2022-01-15') },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, salary: 80000, startDate: new Date('2021-03-20') },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, salary: 75000, startDate: new Date('2021-03-20') },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, salary: 30000, startDate: new Date('2023-07-01') },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, salary: 90000, startDate: new Date('2020-09-10') },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, salary: 60000, startDate: new Date('1980-05-01') },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, salary: 65000, startDate: new Date('2019-11-25') },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, salary: 70000, startDate: new Date('2020-02-14') },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, salary: 55000, startDate: new Date('2018-08-08') },
];

export default function LocalizedDataGridDemo() {
  const [selectedRowIds, setSelectedRowIds] = React.useState([]);

  const handleSelectionChange = (selectionModel) => {
    setSelectedRowIds(selectionModel);
  };

  const selectedRowsData = rows.filter((row) => selectedRowIds.includes(row.id));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={handleSelectionChange}
        rowSelectionModel={selectedRowIds}
        localeText={customEsES}
      />
      <div>
        <h3>Filas Seleccionadas (Selected Rows Data):</h3>
        {selectedRowsData.length > 0 ? (
          <pre>{JSON.stringify(selectedRowsData, null, 2)}</pre>
        ) : (
          <p>No hay filas seleccionadas.</p>
        )}
      </div>
    </Box>
  );
}