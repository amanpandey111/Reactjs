import { IconButton } from "@mui/material"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SendIcon from '@mui/icons-material/Send';

const IconButtonComponent = () => {
  return (
    <>
        <h1>Let's Practice IconButton Component</h1>
        <IconButton>
            Alarm
            <AccessAlarmsIcon color="success"/>
        </IconButton>
        <IconButton sx={{color:"blue"}} edge="end" style={{border:"2px solid black"}} aria-label="Send Message" >
            Send
            <SendIcon />
        </IconButton>
    </>
  )
}

export default IconButtonComponent