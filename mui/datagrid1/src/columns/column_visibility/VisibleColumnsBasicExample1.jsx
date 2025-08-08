import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
 
const rows = [
  {
    id: 1,
    username: '@MUI',
    age: 38,
    desk: 'D-546',
  },
  {
    id: 2,
    username: '@MUI-X',
    age: 25,
    desk: 'D-042',
  },
];
 
export default function VisibleColumnsBasicExample1() {
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({
    username: true,  // Column 'username' will be visible
    age: true,      // Column 'age' will be hidden
    desk: false,      // Column 'desk' will be visible
  });
 
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[
          { field: 'username', headerName: 'Username', width: 150 },
          { field: 'age', headerName: 'Age', width: 100 },
          { field: 'desk', headerName: 'Desk', width: 150 },
        ]}
        rows={rows}
        columnVisibilityModel={columnVisibilityModel} // Apply column visibility settings
        showToolbar
      />
    </div>
  );
}