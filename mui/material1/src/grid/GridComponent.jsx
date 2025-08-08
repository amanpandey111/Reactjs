import { Box, Grid, Typography } from '@mui/material'
import "./gridstyle.css"
import React from 'react'


const GridComponent = () => {
  let w = window.innerWidth
  let h = window.innerHeight
  console.log(w,h);
  return (
    <Box>
        <Typography variant='h4' >Let's Learn Grid System in MUI</Typography>
        <Grid container spacing={1} id="my-grid" >
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item1</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item2</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item3</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item4</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item5</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item6</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item7</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item8</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item9</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item10</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item11</Grid>
            <Grid size={{xl:1, lg:2, md:3, sm:4, xs:6 }} >Item12</Grid>
        </Grid>
    </Box>
  )
}

export default GridComponent