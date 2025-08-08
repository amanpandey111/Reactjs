import { Badge, Box, IconButton, styled, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Badge1 = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 15,
            border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
            padding: '0px 4px',
        },
    }));
  return (
    // <Box m={5} >
    //     <Typography variant="button" >Create Badge</Typography> <br /><br />
    //     <Badge badgeContent={5} color="secondary" >
    //         <EmailIcon color="warning" />
    //     </Badge>
    // </Box>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={7} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  )
}

export default Badge1