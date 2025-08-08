import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function WithAnchorElPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);  // Anchors Popover to the button
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}  // Positions Popover relative to button
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',  // Aligns the Popover below the button
          horizontal: 'left',  // Aligns the Popover to the left side of the button
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover with anchorEl!</Typography>
      </Popover>
    </div>
  );
}
