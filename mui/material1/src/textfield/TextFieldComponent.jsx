import { Box, TextField, Typography } from "@mui/material"


const TextFieldComponent = () => {
  return (
    <Box>
        <Typography variant="h3">Let's Practice Text Field</Typography>      
        <TextField variant="outlined" label="outlined" />  
        <TextField variant="filled" label="outlined" />
        <TextField variant="standard" label="outlined" /> <br /> <br />

        <Typography variant="h4">Form Props</Typography>
    </Box>
  )
}

export default TextFieldComponent