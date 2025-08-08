import { Box, LinearProgress } from "@mui/material"

const LinearIndeterminate = () => {
  return (
    <Box width="20rem" m={4} style={{color:"green"}} >
        <LinearProgress color="error" /> <br />
        <LinearProgress color="inherit" />
    </Box>
  )
}

export default LinearIndeterminate