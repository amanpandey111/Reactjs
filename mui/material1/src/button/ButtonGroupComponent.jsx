import { Typography,ButtonGroup,Button,Tooltip } from "@mui/material"

const ButtonGroupComponent = () => {
  return (
    <>
        <Typography variant="h2" >Let's Practice Button Group Examples</Typography>
        <Typography variant="body1">Horizontal Buttons</Typography>
        <ButtonGroup>
            <Button>back</Button>
            <Button>next</Button>
            <Button>reset</Button>
        </ButtonGroup>
        <br />
        <br />
        <Typography variant="body2" >Vertical Button</Typography>
        <ButtonGroup orientation="vertical" size="small">
            <Button variant="contained" color="info">Addition</Button>
            <Button variant="contained" color="secondary" >Substraction</Button>
            <Button>Reset</Button>
        </ButtonGroup>
        <br />
        <br />
        <Typography variant="body2" >Vertical Button</Typography>
        <ButtonGroup orientation="vertical" size="large" >
            <Button variant="contained" color="info">Addition</Button>
            <Button variant="contained" color="secondary" >Substraction</Button>
            <Button>Reset</Button>
        </ButtonGroup>
        <br /><br />
        <Typography variant="body2" >Vertical Button</Typography>
        <ButtonGroup variant="text" orientation="vertical" size="medium">
            <Button color="info">Addition</Button>
            <Button color="secondary" >Substraction</Button>
            <Button>Reset</Button>
        </ButtonGroup>
        <br />
        <br />
        <Tooltip title="Grouped Button For Count" arrow={true} disableInteractive={false} enterDelay={700} leaveDelay={1000} >
            <ButtonGroup variant="outlined" size="medium">
                <Button color="info">Addition</Button>
                <Button color="secondary" >Substraction</Button>
                <Button>Reset</Button>
            </ButtonGroup>
        </Tooltip>
        <br /><br />
        <Tooltip title="Grouped Button For Count" arrow={true} disableInteractive={false} enterDelay={700} leaveDelay={1000} placement="top-start" open={false} >
            <ButtonGroup variant="contained" size="medium">
                <Button color="info">Addition</Button>
                <Button color="secondary" >Substraction</Button>
                <Button>Reset</Button>
            </ButtonGroup>
        </Tooltip>
        <br /><br />
        <Tooltip title="Grouped Button For Count" arrow={true} enterDelay={700} leaveDelay={1000} open={true} >
            <ButtonGroup variant="contained" size="medium">
                <Button color="info">Addition</Button>
                <Button color="secondary" >Substraction</Button>
                <Button>Reset</Button>
            </ButtonGroup>
        </Tooltip>
    </>
  )  
}

export default ButtonGroupComponent