import React, { useState } from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';

function List3() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = selectedItems.indexOf(value);
    const newSelectedItems = [...selectedItems];

    if (currentIndex === -1) {
      newSelectedItems.push(value);
    } else {
      newSelectedItems.splice(currentIndex, 1);
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <List>
      {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
        <ListItem key={index} button onClick={() => handleToggle(item)}>
          <Checkbox checked={selectedItems.indexOf(item) !== -1} />
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default List3;