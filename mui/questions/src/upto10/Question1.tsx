import { Box, Checkbox, FormControlLabel, Switch, Typography } from "@mui/material"

const Question1 = () => {
  return (
    <div>
      <h1>Why Do we Use FormControlLabel</h1>
      <Box sx={{ border: 2 }} >
        <Typography variant="body2" >We Use Label so even clicking label the functionality works</Typography>
        <FormControlLabel
          control={<Switch />}
          label="Enable notifications"
        />
      </Box>
      <Box sx={{ border: 2 }} >
        <Typography variant="body2" >We Use Label For Correct Spcing and Allignment</Typography>
        <FormControlLabel
          control={<Checkbox />}
          label="Enable notifications"
        />
      </Box>
      <Box sx={{ border: 2 }} >
        <Typography variant="body2" >3️⃣ Label placement options</Typography>
        <FormControlLabel
          control={<Switch />}
          label="Enable notifications"
        />
      </Box>
    </div>
  )
}

export default Question1