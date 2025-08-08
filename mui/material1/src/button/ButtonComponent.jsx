import { Button } from "@mui/material"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonComponent = () => {
  return (
    <div>
        <h1>Let's Practice Button Component</h1>
        <br />
        <h4>Different Variant</h4>
        <Button variant="text" >Text</Button>
        <Button variant="contained" color="secondary" >Contained</Button>
        <Button variant="outlined" color="success" >Outlined</Button>
        <br /><br />

        <h4>Let's Try Out Different Props in Button</h4>
        <Button fullWidth variant="outlined" color="warning" onClick={()=>alert("clicked")} >Onclick</Button>
        <Button variant="outlined" color="info" disabled >Disabled</Button>
        <Button variant="outlined" color="#f44336" sx={{color:"#f44336"}}
        startIcon={ <DeleteIcon/> }
        >Delete</Button>
        <Button variant="contained"
        endIcon={<SendIcon/>}
        >Send</Button>
    </div>
  )
}

export default ButtonComponent