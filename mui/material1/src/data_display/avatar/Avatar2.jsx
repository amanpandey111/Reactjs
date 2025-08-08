import { Avatar, AvatarGroup, Box, Typography } from "@mui/material"

const Avatar2 = () => {
  return (
    <Box m={3} border="1px solid" >
        <Typography variant="button" >Grouped</Typography>
        <AvatarGroup max={5} sx={{flexDirection:"row-reverse",justifyContent:"flex-end"}} >
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
        </AvatarGroup>

        <Typography variant="button" >Total Avatar</Typography>
        <AvatarGroup total={25} sx={{flexDirection:"row-reverse",justifyContent:"flex-end"}} >
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
        </AvatarGroup>

        <Typography variant="button" >Custom Surplus</Typography>
        <AvatarGroup sx={{flexDirection:"row-reverse",justifyContent:"flex-end"}} 
        renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
        total={5251}
        >
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
        </AvatarGroup>

        <Typography variant="button" >Spacing among avatars</Typography>
        <AvatarGroup sx={{flexDirection:"row-reverse",justifyContent:"flex-end"}} 
        total={10} spacing={9}
        >
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
            <Avatar src="/horse.jpg" />
        </AvatarGroup>
    </Box>
  )
}

export default Avatar2