import { useDispatch, useSelector } from 'react-redux'
import "./ui.css"
import { NavLink } from 'react-router'
import { FaHeart } from "react-icons/fa";
import {  toggleSignIn, toggleSignUp } from '../../store';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
// import { Button } from 'bootstrap';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const RightSide = () => {
    const[bool,setBool] = useState("")
    const mycourse = useSelector((state)=>state.mycourse)      // here will have 
    const courses = useSelector((state)=>state.course_array)   // particular courses for a related category
    const userlogin = useSelector((state)=>state.userlogin)    // If user login we will add the particular course in whishlist for a particular user
     const user = useSelector((state)=>state.userdetail)       // Getting the current user who is logged in
    
    const dispatch = useDispatch()
    // To make the wishlist change conditionally
    const handleWishList = (id,email) => {
        let bool = false
        let userdata = JSON.parse(localStorage.getItem("userdata"))
        let index = userdata.findIndex((curEle)=>curEle.email==email)
        if(userdata[index].wishlist && index>=0){
            let some = userdata[index].wishlist.some((curEle)=>curEle.id==id)
            if(some) bool=true
        }
        return bool
    }
    // To make the wishlist change conditionally first time
    const handleInitilWish = (id) => {
        console.log(id);
        setBool(!bool)
    }
    // let userdata = JSON.parse(localStorage.getItem("userdata"))
    // let individual = userdata.filter((curEle)=>curEle.email==email)

    // Adding wishlist course in my single data storage
    const addWishCourse = (email,course,category) => {
        console.log(email,course,category);
        let userdata = JSON.parse(localStorage.getItem("userdata"))
        let individual = userdata.filter((curEle)=>curEle.email==email)
        if(individual[0].wishlist==undefined || individual[0].wishlist==null){
            individual[0].wishlist = [course]
        }
        else{
            if(individual[0].wishlist.length==1){
                console.log("length is one");
                if(individual[0].wishlist[0].id!==course.id){
                    individual[0].wishlist.push(course)
                }
                else{
                    console.log("Hello we are same");
                    individual[0].wishlist.splice(0,1)
                    setBool(false)
                    console.log(individual[0].wishlist.length);
                    // setFinalBool(false)
                    // setBool(false)
                }
            }
            else{
                console.log("length is more than one");
                console.log(individual[0].wishlist);
                let bool = individual[0].wishlist.some((curEle)=>curEle.id==course.id)
                console.log(bool);
                if(!bool){
                    individual[0].wishlist.push(course)
                }
                else{
                    // console.log(id);
                    console.log(individual[0].wishlist);
                    let index = individual[0].wishlist.findIndex((curEle)=>{return curEle.id==course.id})
                    console.log(index);
                    individual[0].wishlist.splice(index,1)
                    setBool(false)
                    // setFinalBool(false)
                }
            }
        }
        console.log(individual);
        console.log(userdata);
        // dispatch(enrollWishCourse(email,course,category))
        localStorage.setItem("userdata",JSON.stringify(userdata))
    }
    // localStorage.removeItem("wishlist")
    // useEffect(() => {
        // window.scrollTo(0, 0); 
    // }, [pathname]);
  return (
    <>
       {courses.length >=1 ? 
        <Box className='right-section-main'
        sx={{ml:"17.4rem",mt:"5rem",mb:"1.5rem"}}
        >
            <div>
                <Grid container spacing={{ lg:3, md:2,sm:2,xs:2 }} className='ul' sx={{pr:2 }} >
                    {
                        courses.map((curEle)=>{
                            return <Grid key={curEle.id}  className='li grid_container' size={{xl:3, lg:4, md:6}}
                                    sx={{}}
                                    >
                                            <Card sx={{
                                            '&:hover':{
                                                transform:"scale(1.03)"
                                            },
                                            pb:"0.5rem",
                                            boxShadow:"0px 0px 5px grey"
                                         }} className='course_card'>
                                                <NavLink to={`/${curEle.id}`} >
                                                    <CardMedia
                                                        className="card-img-top"
                                                        sx={{ height: '170px', width:'100%', objectFit:'cover' }}
                                                        image={curEle.image}
                                                        title="green iguana"
                                                    />
                                                </NavLink>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                    {curEle.name}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:"0.8rem" }}>
                                                    {curEle.description}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions 
                                                sx={{ display:'flex', justifyContent:"space-between",p:"10px 15px" }}
                                                >
                                                    <Button  size="small" variant='contained' sx={{fontSize:"11px"}} >
                                                        <NavLink to={`/${curEle.id}`} className="" style={{color:"white", textDecorationLine:"none"}}>For more Details</NavLink>
                                                    </Button>
                                                    <Typography>{curEle.price} ₹</Typography>
                                                    <Typography>⭐{curEle.rating}</Typography>
                                                    {userlogin?
                                                            <FaHeart 
                                                            style={{fontSize:"1.4rem"}} 
                                                            className={(handleWishList(curEle.id,user[0].email))?"success_wish":"whishlist"} onClick={(e)=>{ 
                                                                e.stopPropagation(); 
                                                                // addWishListCourse(curEle)
                                                                addWishCourse(user[0].email,curEle,"wishcourse")
                                                                handleInitilWish(curEle.id)
                                                                // dispatch(toggleSignUp("hy"));
                                                            }} />
                                                            :<FaHeart style={{fontSize:"1.4rem"}} className='whishlist' onClick={(e)=>{ 
                                                                e.stopPropagation(); 
                                                                dispatch(toggleSignUp("hy"));
                                                                dispatch(toggleSignIn(false));
                                                            }} />}
                                                </CardActions>
                                            </Card>
                                    </Grid>
                        })
                    }
                </Grid>
            </div>
        </Box>
        : <Box className='right-section-main' 
        sx={{mt:"1rem",ml:"17.4rem"}}
        >
        <Box sx={{mt:"4rem",mb:"1.5rem",
            
        }} >
            <Grid container spacing={{ lg:3, md:2,sm:2,xs:2 }} className='ul' sx={{pr:2}} >
                {
                    mycourse.map((curEle)=>{
                        return curEle.courses.map((curEle)=>{
                            return <Grid key={curEle.id} className='li grid_container' size={{xl:3, lg:4, md:6}} 
                                    sx={{}}
                                    >
                                        {/* <Paper> */}
                                            <Card className='course_card' sx={{
                                                '&:hover':{
                                                    transform:"scale(1.03)"
                                                },
                                                pb:"0.5rem",
                                                boxShadow:"0px 0px 5px grey"
                                            }}>
                                            <NavLink to={`/${curEle.id}`}>
                                                <CardMedia
                                                    className="card-img-top"
                                                    sx={{ height: '170px', width:'100%', objectFit:'cover' }}
                                                    image={curEle.image}
                                                    title="green iguana"
                                                />
                                            </NavLink>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                {curEle.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:"0.8rem" }}>
                                                {curEle.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions 
                                            sx={{ display:'flex', justifyContent:"space-between",p:"10px 15px" }}
                                            >
                                                <Button  size="small" variant='contained' sx={{ fontSize:"11px" }} >
                                                    <NavLink to={`/${curEle.id}`} className="" style={{color:"white", textDecorationLine:"none"}}>For more Details</NavLink>
                                                </Button>
                                                <Typography>{curEle.price} ₹</Typography>
                                                <Typography>⭐{curEle.rating}</Typography>
                                                {userlogin?
                                                        <FaHeart 
                                                        style={{fontSize:"1.4rem"}} 
                                                        className={(handleWishList(curEle.id,user[0].email))?"success_wish":"whishlist"} onClick={(e)=>{ 
                                                            e.stopPropagation(); 
                                                            // addWishListCourse(curEle)
                                                            addWishCourse(user[0].email,curEle,"wishcourse")
                                                            handleInitilWish(curEle.id)
                                                            // dispatch(toggleSignUp("hy"));
                                                        }} />
                                                        :<FaHeart style={{fontSize:"1.4rem"}} className='whishlist' onClick={(e)=>{
                                                            e.stopPropagation(); 
                                                            dispatch(toggleSignUp("hy"));
                                                            dispatch(toggleSignIn(false));
                                                        }} />}
                                            </CardActions>
                                        </Card>
                                        {/* </Paper> */}
                                  </Grid>
                        })
                    })
                }
            </Grid>
        </Box>
    </Box>}
    </>
  )
}

export default RightSide