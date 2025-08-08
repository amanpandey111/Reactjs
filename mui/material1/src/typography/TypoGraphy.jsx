import React from 'react'
import { Typography } from '@mui/material'

const TypoGraphy = () => {
  return (
    <div>
        <Typography variant="h1" color='white' bgcolor="black" align='right' >This is Heading1</Typography>
        <Typography variant='h2' color='pink' >This is Heading2</Typography>
        <Typography variant='h3' color='red' >This is Heading3</Typography>
        <Typography variant='h4' color='yellow' >This is Heading4</Typography>
        <Typography variant='h5' >This is Heading5</Typography>
        <Typography variant='h6' >This is Heading6</Typography>
        <Typography variant='body1' > This is Body1</Typography>
        <Typography variant='body2' >This is Body2</Typography>
        <Typography variant='button' >This is Button</Typography> <br />
        <Typography variant='overline' >This is Overline</Typography>
        <Typography variant='subtitle1' >This is Subtitle1</Typography>
        <Typography variant='subtitle2' >This is Subtitle2</Typography>
    </div>
  )
}

export default TypoGraphy