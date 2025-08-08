import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function List2() {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Item 1" />
        <IconButton edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Item 2" />
        <IconButton edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </List>
  );
}

export default List2;
