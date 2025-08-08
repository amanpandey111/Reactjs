import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function List4() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Main Item" />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary="Sub Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sub Item 2" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default List4;