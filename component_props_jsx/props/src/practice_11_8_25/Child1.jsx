import React from 'react'
import Card from '@mui/material/Card'
import { CardMedia, Typography } from '@mui/material'

// const Child1 = (props) => {
//     console.log(props);
//   return (
//     <Card sx={{maxWidth:345}} >
//         <CardMedia component="img"
//         image = "https://cdn.pixabay.com/photo/2023/01/28/19/01/bird-7751561_640.jpg"
//         sx={{}}
//         />
//         <Typography gutterBottom variant="h5" component="div">
//           {props.name}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           {props.description}
//         </Typography>
//     </Card>
//   )
// }

// const Child1 = ({children}) => {
//   return (
//     <div>
//         {children}
//     </div>
//   )
// }

const Child1 = ({color,time}) => {
  return (
    <div>
        <p style={{color:color}} >{time}</p>
    </div>
  )
}

export default Child1