import { Box, Grid } from '@mui/material'
import React from 'react'

const PracticeGrid1 = () => {
  return (
    <Box sx={{ border: '2px solid red' }} >
      {/* <Grid container>
        <Grid size={{ lg:4 }} >
          <Box sx={{ minWidth: 100, minHeight: 100, border: '2px solid green' }} >
            First Grid (Row Span)
          </Box>
        </Grid>
        <Grid size={{ lg:8 }}>
          <Box sx={{ minWidth: 100, minHeight: 100, border: '2px solid blue' }}>
            Second Grid (Row Span)
          </Box>
        </Grid>
        <Grid size={{ lg:8 }} >
          <Box sx={{ minWidth: 100, minHeight: 100, border: '2px solid green' }}>
            Third Grid (Row Span)
          </Box>
        </Grid>
      </Grid> */}
      <Grid
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: { lg: '4fr 8fr', xs: '1fr' },
          gridTemplateRows: '1fr 1fr',
          gap: 2
        }}
      >
        <Box sx={{ gridRow: { lg: 'span 2' }, border: '2px solid green' }}>1</Box>
        <Grid container
        sx={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: { lg: '1fr 1fr 1fr 1fr', md: '1fr 1fr' },
          gridTemplateRows: { md: '1fr 1fr' }
        }}
        >
          <Box sx={{ width: '100%', border: '1px solid red' }} ></Box>
          <Box sx={{ width: '100%', border: '1px solid red' }} ></Box>
          <Box sx={{ width: '100%', border: '1px solid red' }} ></Box>
          <Box sx={{ width: '100%', border: '1px solid red' }} ></Box>
        </Grid>
        <Box sx={{ border: '2px solid green' }}>3</Box>
      </Grid>
    </Box>
  )
}

export default PracticeGrid1