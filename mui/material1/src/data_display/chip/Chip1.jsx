import { Avatar, Box, Chip, Stack, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LayersClearIcon from '@mui/icons-material/LayersClear';

const Chip1 = () => {
  return (
    <Box>
      <Typography>Let's Learn Chip Concept</Typography>
      <Stack direction="row" >
        <Chip variant="filled" label="chip filled" />
        <Chip variant="outlined" label="chip outlined" />
      </Stack>
      <br /><br />

      <Typography variant="button" >Deletabl</Typography>
      <Stack direction="row" >
        <Chip variant="filled" label="deletable" onDelete={()=>console.log("deleting object")} />
        <Chip variant="outlined" label="delete" onDelete={()=>console.log("deleting")} />
      </Stack>
      <br /><br />

      <Typography variant="button" >Clickable Link</Typography>
      <Stack direction={"row"} >
        <Chip
        label="clickable link"
        variant="filled"
        component="a"
        href="https://mui.com/material-ui/react-chip/"
        clickable
        />
      </Stack>
      <br /><br />

      <Typography variant="button" >Custom delete Icon</Typography>
      <Stack direction={"row"}>
        <Chip 
        label="delete"
        variant="outlined"
        deleteIcon={<DeleteForeverIcon/>}
        onDelete={()=>console.log("delete Icon")}
        />
      </Stack>
      <br /><br />

      <Typography variant="button" >Chip adornment</Typography>
      <Stack direction={"row"}>
        <Chip 
        label="Avatar"
        variant="filled"
        avatar={ <Avatar>A</Avatar> }
        />
        <Chip
        variant="outlined"
        label="avatar"
        avatar={ <Avatar src="/horse.jpg" /> }
        />
      </Stack>
      <br /><br />

      <Typography variant="button" >Icon Chip</Typography>
      <Stack direction={"row"}>
        <Chip 
        label="Avatar"
        variant="filled"
        icon={<DeleteForeverIcon/>}
        />
        <Chip
        variant="outlined"
        label="Layers"
        icon={<LayersClearIcon/>}
        />
      </Stack>
      <br /><br />
    </Box>
  )
}

export default Chip1