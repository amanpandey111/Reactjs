import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

export default function BadgeOverlap() {
  return (
    <Stack spacing={3} direction="row" m={5}>
      <Badge color="secondary" badgeContent="">
        {rectangle}
        {/* <ShoppingCartIcon/> */}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot"
      anchorOrigin={{
        vertical:"bottom",
        horizontal:"right"
      }}
      >
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
        {circle}
      </Badge>
    </Stack>
  );
}
