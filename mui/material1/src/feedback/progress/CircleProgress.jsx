import { Box, CircularProgress, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"


const CircleProgress = () => {
    const[progress,setProgress] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setProgress((prev)=>(prev>=100 ? 0 : prev+10));
        },800)
        // return () => clearInterval(timer)
    },[])

  return (
    <Box m={2} >
        <Typography variant="button" display="block" >Sample Circular Progress Bar</Typography>
        <CircularProgress/>
        <Typography variant="button" display="block" mt={3} >Circular Determinate</Typography>
        <Stack mt={2} direction="row" spacing={3} >
            <CircularProgress variant="determinate" value={25} />
            <CircularProgress variant="determinate" value={50} />
            <CircularProgress variant="determinate" value={75} />
            <CircularProgress variant="determinate" value={progress} />
        </Stack>
    </Box>
  )
}

export default CircleProgress