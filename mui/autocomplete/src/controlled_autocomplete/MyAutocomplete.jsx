import React, { useState } from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';

const ControlledAutocomplete = () => {
  const [inputText, setInputText] = useState(''); // Controlled value for input
  const [suggestions, setSuggestions] = useState([]); // Controlled suggestions
  const [selectedItem, setSelectedItem] = useState(null); // Controlled selected item

  // Sample data for suggestions
  const courses = [
    { id: 1, name: 'React Development' },
    { id: 2, name: 'Python Full Stack' },
    { id: 3, name: 'Java Full Stack' },
    { id: 4, name: 'Data Science with Python' },
  ];

  // Handle input change and filter suggestions
  const handleInputChange = (e, value) => {
    setInputText(value); // Set input text
    if (value.trim() === '') {
      setSuggestions([]); // Clear suggestions if input is empty
    } else {
      const filtered = courses.filter(course =>
        course.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered); // Set filtered suggestions
    }
  };

  // Handle item selection
  const handleSelectionChange = (event, newValue) => {
    setSelectedItem(newValue); // Store the selected item
    setInputText(newValue ? newValue.name : ''); // Update input text with selected item name
    setSuggestions([]); // Clear the suggestions when an item is selected
    setInputText("")
  };
  console.log(selectedItem);
  console.log(inputText);
  return (
    <Box sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        value={selectedItem} // Use the selected item for controlled value
        onInputChange={handleInputChange} // Handle input changes
        onChange={handleSelectionChange} // Handle selection
        options={suggestions} // Controlled suggestions list
        getOptionLabel={(option) => option.name || ''}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for Courses"
            variant="outlined"
            value={inputText} // Bind the input value to state for controlled behavior
            onChange={(e) => setInputText(e.target.value)} // Update the inputText state
          />
        )}
        renderOption={(props, option) => (
          <li {...props}>{option.name}</li>
        )}
      />
    </Box>
  );
};

export default ControlledAutocomplete;