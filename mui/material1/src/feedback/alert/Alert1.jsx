import { Alert, Box, Button } from "@mui/material"
import { useState } from "react"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const Alert1 = () => {
    const[bool,setBool] = useState(false)
    const handleformsubmit = ()=> {
        setBool(true)
        let l = setTimeout(()=>{
            setBool(false)
        },3000)
    }
  return (
    <Box display={"inline-block"} >
        <Button variant="contained" onClick={handleformsubmit} >click me</Button>
        {bool && <Alert
                 icon={<DoneOutlineIcon/>}
                 severity="warning" >Successfully submitted the form</Alert>}
        <Alert
        variant="standard"
        >Read The Above Guidelines Carefully</Alert>
    </Box>
  )
}

export default Alert1