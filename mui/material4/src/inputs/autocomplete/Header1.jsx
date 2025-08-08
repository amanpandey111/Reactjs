import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const Header1 = () => {
  // Sample course data (replace with your data)
  const courseData = [
    { id: 14, name: 'Java Full Stack', instructor: 'Robert Brown' },
    { id: 31, name: 'Android App Development (Java)', instructor: 'Ravi Sharma' },
    { id: 64, name: 'Performance Testing with JMeter', instructor: 'Vikram Joshi' },
    { id: 73, name: 'Web3.js', instructor: 'kumar' },
    { id: 74, name: 'hjfjgh', instructor: 'Rithik' },
    { id: 75, name: 'jgui', instructor: 'sumanth' },
    { id: 76, name: 'iut7u', instructor: 'Vinay' },
    { id: 77, name: 'Web3.js', instructor: 'Ashish' },
  ];

  // State to store the selected course (object) and the filtered suggestions
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState(courseData);

  // Filter suggestions based on user input
  const handleInputChange = (e, value) => {
    const filtered = courseData.filter(course => 
      course.name.toLowerCase().includes(value.toLowerCase()) // Filtering logic
    );
    setFilteredSuggestions(filtered);
  };

  return (
    <div> 
      <Autocomplete
        value={selectedCourse} // The selected course object
        onInputChange={handleInputChange} // Update filtered suggestions on input change
        options={filteredSuggestions} // Array of suggestions to display
        getOptionLabel={(option) => option.name} // Extract the label from the course object
        onChange={(e, newValue) => {
          setSelectedCourse(newValue); // Update the selected course
          console.log("Selected Course: ", newValue);
        }}
        renderInput={(params) => <TextField {...params} label="Search Courses" />}
        disablePortal
        sx={{ width: 300 }}
      />
    </div>
  );
};

export default Header1;
