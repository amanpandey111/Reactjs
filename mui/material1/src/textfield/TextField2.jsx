import { useState } from "react"
import "./textstyle.css"
import { Box, Stack, TextField, Typography } from "@mui/material"
import {InputAdornment} from "@mui/material"

const TextField2 = () => {
    const[info,setInfo] = useState("")
  return (
    <Box m={2} >
        <Typography>Text Field Example in mui</Typography>
        <Stack direction="row" spacing={2} my={2} >
            <TextField label="Enter Name" variant="outlined" />
            <TextField label="Enter Name" variant="outlined" size="small" />
            <TextField label="Enter Name" variant="standard" size="large" color="error" />
        </Stack>
        <Stack direction="row" spacing={2} my={2} >
            <TextField label="Enter Name" variant="outlined" />
            <TextField label="Enter Name" variant="outlined" size="small" />
            <TextField label="Enter Name" variant="standard" size="large" color="error" />
        </Stack>
        <Stack direction="row" spacing={2} my={2} id="stack1" >
            <TextField 
            type="password"
            label="Enter Password" 
            variant="outlined"
            // disabled 
            color="warning"
            helperText="do not share your password with anyone"
            />
            <TextField 
            type="date"
            // label="Enter Password" 
            variant="outlined" 
            color="warning" />
            <TextField 
            type="time"
            // label="Enter Password" 
            variant="outlined" 
            color="warning" />
        </Stack>

        <Stack direction="row" spacing={2} my={2} id="stack1" >
            <TextField 
            type="number"
            label="Enter Your salary" 
            variant="outlined"
            // disabled 
            inputProps={{
                
            }}
            color="warning"
            helperText="do not share your password with anyone"
            />
            <TextField 
            type="number"
            label="Enter Your age" 
            variant="outlined" 
            color="warning" />
        </Stack>
    </Box>
  )
}

export default TextField2