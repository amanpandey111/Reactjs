import React, { useEffect, useState } from 'react'
import Child1 from './Child1'
import { Box, Card, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'

const Parent1 = () => {
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  const [color,setColor] = useState('')
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());  // Update time every second
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);  // Empty array means this effect runs only once when the component mounts
  // console.log(time);

  const handleChange = (event) => {
    setColor(event.target.value)
  }
  console.log(color);
  return (
    // <div>
    //   <Child1/>
    // </div>

    //! passing prop to a child component
    // <Child1 name="Woodpecker" description="The woodpecker is a bird known for its distinctive behavior of pecking into tree trunks with its strong beak to find insects or create nesting cavities." />

    //! passing jsx as a children
    // <Child1>
    //   <Card sx={{maxWidth:345}} >
    //     <CardMedia component="img"
    //     image = "https://cdn.pixabay.com/photo/2023/01/28/19/01/bird-7751561_640.jpg"
    //     sx={{}}
    //     />
    //     <Typography gutterBottom variant="h5" component="div">
    //       Woodpicker
    //     </Typography>
    //     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    //       The woodpecker is a bird known for its distinctive behavior of pecking into tree trunks with its strong beak to find insects or create nesting cavities.
    //     </Typography>
    //   </Card>
    // </Child1>

    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pick a Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={color}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="red">Red</MenuItem>
            <MenuItem value="orange">Orange</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Child1 color={color} time={time} />
    </div>
  )
}

export default Parent1