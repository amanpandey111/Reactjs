import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container sx={{border:"2px solid green"}} fixed >
        <Box sx={{ bgcolor: '#cfe8fc', height: '98vh'}} />
        {/* hy */}
      </Container>
    </React.Fragment>
  );
}