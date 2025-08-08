import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { ListItem, ListItemText } from '@mui/material';

function List5() {
  const items = Array.from({ length: 20 }, (_, index) => `Item ${index+1}`);

  const Row = ({ index, style }) => (
    <ListItem style={style}>
      <ListItemText primary={items[index]} />
    </ListItem>
  );

  return (
    <List height={400} itemCount={items.length} itemSize={56} width={150}>
      {Row}
    </List>
  );
}

export default List5;
