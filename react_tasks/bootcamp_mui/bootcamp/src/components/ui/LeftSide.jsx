import { useDispatch, useSelector } from 'react-redux'
import "./ui.css"
import { addArray } from '../../store'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useNavigate } from 'react-router';

const LeftSide = ({open,setOpen}) => {
    console.log(setOpen);
    // console.log("confirm render");
    const mycourse = useSelector((state)=>state.mycourse)
    const currentId = useSelector((state)=>state.currentId)
    // console.log(currentId);
    // console.log(isCurrent);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // console.log(mycourse);
    const handleClick = (data)=> {
        dispatch(addArray(data))
    }
  return (
    <Box className={`left-main-section ${open==true ? "opendraw" : "closedraw"}`}
    sx={{height:"100vh",position:"fixed"}}
    >
        <Box>
            <List
            sx={{
                p:"1rem 0.3rem", lineHeight:"1.2rem",display:"flex",flexDirection:"column",gap:"1rem",bgcolor:"#0A5ED7",height:"100vh"
            }}
            >
                {
                    mycourse.map((curEle)=>{
                        return <ListItem
                        sx={{
                            cursor:"pointer", color:"white",borderRadius:"1rem",height:"3rem",fontSize:"large"
                        }}    
                        key={curEle.id} onClick={()=>{
                            console.log("drawer open");
                            handleClick(curEle);
                            setOpen(false);
                            navigate("/")
                        }} className={currentId==curEle.id ? "current" : ""} >{curEle.category}</ListItem>
                    })
                }
            </List>
        </Box>
    </Box>
  )
}

export default LeftSide