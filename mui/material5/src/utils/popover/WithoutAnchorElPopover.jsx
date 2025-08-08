import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function WithoutAnchorElPopover() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);  // Opens Popover without specific anchor element
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        open={open}  // Popover opens without anchorEl
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover without anchorEl!</Typography>
      </Popover>
    </div>
  );
}