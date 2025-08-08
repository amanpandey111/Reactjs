import React from 'react'
import { Skeleton, Typography } from '@mui/material'

const Skeleton1 = () => {
  return (
    <>
      <Typography variant='button' fontWeight={600} color='info' >Let's Learn The MUI Concepts</Typography>
      <Skeleton variant='rectangular' width={210} height={118}
       sx={{
        bgcolor:"red",
        color:"white"
      }} 
       >hy</Skeleton>
      <Skeleton variant='circular' width={210} height={118} sx={{bgcolor:"red"}} >hy</Skeleton>
      <Skeleton variant='text' width={210} height={118} sx={{bgcolor:"red"}} >hy</Skeleton>
      <Skeleton variant='rounded' width={210} height={118} sx={{bgcolor:"red"}} >hy</Skeleton>

      <Typography m={3} >Changing Animation</Typography>
      <Skeleton variant='rectangular' width={210} height={118} >Pulse-default</Skeleton>
      <Skeleton variant='rectangular' width={210} height={118} animation="wave" >Wave</Skeleton>
      <Skeleton variant='rectangular' width={210} height={118} animation={false} >None</Skeleton>
    </>
  )
}

export default Skeleton1