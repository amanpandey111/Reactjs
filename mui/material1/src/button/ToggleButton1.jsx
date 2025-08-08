import { Typography } from "@mui/material"
import {ToggleButtonGroup} from "@mui/material"
import {ToggleButton} from "@mui/material"
import { useState } from "react"
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const ToggleButton1 = () => {
  const[buttonval,setButtonVal] = useState("")
  const[alignment,setAlignment] = useState("")
 
  const handleButtonChange = (event,newval) => {
    setButtonVal(newval)
  }
  const handleAlignment = (event,newval) => {
    setAlignment(newval)
  }

  console.log(alignment);
  return (
    <div style={{textAlign:"center"}}>
      <Typography variant="caption" sx={{mt:"10px"}} >Let's Learn Toggling Button : Caption Typography</Typography> <br /> <br />
      <ToggleButtonGroup value={buttonval} onChange={handleButtonChange} exclusive={true} >
        <ToggleButton value="one" >one</ToggleButton>
        <ToggleButton value="Two" >Two</ToggleButton>
        <ToggleButton value="Three" >Three</ToggleButton>
        <ToggleButton value="Four" >Four</ToggleButton>
        <ToggleButton value="Five" disabled >Five</ToggleButton>
      </ToggleButtonGroup>
      <br /><br />
      <ToggleButtonGroup value={buttonval} onChange={handleButtonChange} exclusive={true} orientation="vertical" >
        <ToggleButton value="one" >one</ToggleButton>
        <ToggleButton value="Two" >Two</ToggleButton>
        <ToggleButton value="Three" >Three</ToggleButton>
        <ToggleButton value="Four" >Four</ToggleButton>
        <ToggleButton value="Five" disabled >Five</ToggleButton>
      </ToggleButtonGroup>
      <br /><br />
      <Typography variant="caption" sx={{mt:"10px"}} >Toggle Button Exclusive Section</Typography> <br /> <br />
      <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} >
        <ToggleButton value="left" >
          <FormatAlignLeftIcon/>
        </ToggleButton>
        <ToggleButton value="center" >
          <FormatAlignCenterIcon/>
        </ToggleButton>
        <ToggleButton value="right" >
          <FormatAlignRightIcon/>
        </ToggleButton>
        <ToggleButton value="justify">
          <FormatAlignJustifyIcon/>
        </ToggleButton>
      </ToggleButtonGroup>

      <Typography variant="body1" align={alignment} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel aliquam possimus neque ipsa numquam dolorum similique quidem, quo odio rerum cum quisquam harum, quas nostrum. Explicabo expedita laudantium quia?
        Sapiente quos quam ipsa? A accusamus enim natus eos, quas, ducimus mollitia, obcaecati dolores tenetur consequuntur officiis perferendis illo! Voluptatibus vitae magnam tempore atque, omnis velit porro ullam odit esse.
        Aperiam ratione dolores consequuntur voluptates nemo aliquam excepturi dignissimos reprehenderit blanditiis voluptatem laudantium voluptate illum cumque illo beatae reiciendis quibusdam atque ipsam, eius ducimus. Voluptate at veniam consequuntur odit explicabo!
      </Typography>
    </div>
  )
}

export default ToggleButton1