import { useDispatch, useSelector } from 'react-redux'
import "./ui.css"
import { addArray } from '../../store'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useNavigate } from 'react-router';
// import { one_course } from './Header';
interface globalstore{           // this is for store
    mycourse:[],
    course_array:[],
    alldata:[],
    signup:boolean,
    userexists:boolean,
    signin:boolean,
    currentId:number,
    userlogin:boolean,
    userdetail:[],     // here we will store the data of user who login
    usercourses:[],    // cusercourses after deletion anyway we won't use just for that our component get rendered
    inputText:string,
    userinput:boolean,
    userinputtext:string
}
interface mycourse_object{                  // this is for mycourse
   id:number,category:string,courses:[],
}

const LeftSide = ({open,setOpen}:any) => {
    // console.log(setOpen);
    // console.log("confirm render");
    const mycourse = useSelector((state:globalstore)=>state.mycourse)
    const currentId = useSelector((state:globalstore)=>state.currentId)
    // console.log(currentId);
    // console.log(isCurrent);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // console.log(mycourse);
    const handleClick = (data:{id:number,category:string,courses:[]})=> {
        console.log(data);
        dispatch(addArray(data))
    }
  return (
    <Box className={`left-main-section ${open==true ? "opendraw" : "closedraw"}`}
    sx={{height:"100vh",position:"fixed"}}
    >
        <Box>
            <List
            sx={{
                lineHeight:"1.2rem !important",display:"flex",flexDirection:"column",gap:"1rem",bgcolor:"#0A5ED7",height:"100vh"
            }}
            >
                {
                    mycourse.map((curEle:mycourse_object)=>{
                        return <ListItem
                        sx={{
                            cursor:"pointer", color:"white",borderRadius:"1rem",height:"3rem",fontSize:"large",p:"1rem 0.8rem !important"
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