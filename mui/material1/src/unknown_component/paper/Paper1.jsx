import { Box, Paper } from "@mui/material"


const Paper1 = () => {
  return (
    <div>
        <Box>
            <Paper elevation={7} sx={{m:"2rem", display:"inline-block"}} >This is a Paper component</Paper>
        </Box>
        <Paper elevation={7} sx={{p:"0.4rem", display:"inline-block", m:"1rem",bgcolor:"grey"}} >This is a Paper component</Paper>
    </div>
    
  )
}

export default Paper1