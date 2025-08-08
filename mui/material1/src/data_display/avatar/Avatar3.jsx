import { Avatar, Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from '@mui/material/Badge';


const Avatar3 = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        width: 10,        // 👈 badge size
    height: 10,       // 👈 badge size
    minWidth: 10,     // 👈 prevents default padding
    // fontSize: 8,      // 👈 only relevant if using text badge
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Box m={4}>
      <Stack direction="row">
        
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
            <SmallAvatar alt="Memy Sharp" src="/tree.jpg" />
            }
        >
         <Avatar alt="Travis Howard" src="/turtle.jpg" />
      </Badge>
      </Stack>
      <br /><br />
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent=" "
      >
        <Avatar src="/horse.jpg" />
      </StyledBadge>
    </Box>
  );
};

export default Avatar3;
