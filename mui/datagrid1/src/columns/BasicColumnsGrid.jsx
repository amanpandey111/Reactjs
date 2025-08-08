import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function BasicColumnsGrid() {
  return (
    <Box sx={{ height: 250, width: '90%', m:'2rem' }}>
      <DataGrid
        columns={[{ field: 'username' }, { field: 'age' }, {field:'qualification'}]}
        rows={[
          {
            id: 1,
            username: '@MUI',
            age: 100,
            qualification: 'B.Tech',
            
          },
        ]}
      />
    </Box>
  );
}