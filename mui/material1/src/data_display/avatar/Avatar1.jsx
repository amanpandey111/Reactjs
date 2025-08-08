import { Avatar, Box, Stack, Typography } from "@mui/material"
import horse from "/horse.jpg"
import tree from "/tree.jpg"
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Avatar1 = () => {
  return (
    <Box m={5} >
        <Typography variant="h3" mt={4} >Let's Practice Avatar</Typography>
        <Stack direction="row" spacing={2} >
            <Avatar src={horse} alt="horse profile" />
            <Avatar src="/turtle.jpg" alt="turtle profile" />
            <Avatar src={tree} alt="tree profile" />
        </Stack>

        <Typography variant="h3" mt={4} >Letter Avatar</Typography>
        <Stack direction="row" spacing={2} >
            <Avatar sx={{bgcolor:"beige", color:"black"}} >A</Avatar>
            <Avatar sx={{bgcolor:"turquoise", color:"white"}} >M</Avatar>
            <Avatar sx={{bgcolor:"ButtonFace", color:"black"}} >A</Avatar>
            <Avatar sx={{bgcolor:"ButtonText"}} >N</Avatar>
        </Stack>

        <Typography variant="h3" mt={4} >Icon Avatar</Typography>
        <Stack direction="row" spacing={2} >
            <Avatar sx={{bgcolor:"beige", color:"black"}} >
                <FolderIcon/>
            </Avatar>
            <Avatar sx={{bgcolor:"turquoise", color:"white"}} >
                <PageviewIcon/>
            </Avatar>
            <Avatar sx={{bgcolor:"ButtonFace", color:"black"}} >
                <AssignmentIcon/>
            </Avatar>
        </Stack>

        <Typography variant="h3" mt={4} >Variant</Typography>
        <Stack direction="row" spacing={2} >
            <Avatar sx={{bgcolor:"beige", color:"black"}} variant="square" >
                A
            </Avatar>
            <Avatar sx={{bgcolor:"turquoise", color:"white"}} variant="rounded" >
                <PageviewIcon/>
            </Avatar>
            <Avatar sx={{bgcolor:"ButtonFace", color:"black"}} >
                <AssignmentIcon/>
            </Avatar>
        </Stack>
    </Box>
  )
}

export default Avatar1