import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { toggleSignIn, toggleSignUp } from '../../store'
import { useState } from 'react'
interface globalstore{     // this is from store
    mycourse:[],
    course_array:[],
    alldata:[],
    signup:boolean,
    userexists:boolean,
    signin:boolean,
    currentId:string,
    userlogin:boolean,
    userdetail:[],     // here we will store the data of user who login
    usercourses:[],    // cusercourses after deletion anyway we won't use just for that our component get rendered
    inputText:string,
    userinput:boolean,
    userinputtext:string
}
interface userdetail1{   // this is for userdata
    courses : [],
    cpassword : string,
    email : string,
    firstname : string,
    lastname : string,
    password : string,
    wishlist : []
}
interface course{
    description:string,
    enrolled:boolean,
    id:string,
    image:string,
    instructor:string,
    location:string,
    name:string,
    price:number,rating:number,reviewCount:number
}

const RightSide1 = () => {
    const dispatch = useDispatch()
    const [bool, setBool] = useState<string|boolean>("")
    const courses = useSelector((state:globalstore) => state.course_array)   // particular courses for a related category
    const userlogin = useSelector((state:globalstore) => state.userlogin)    // If user login we will add the particular course in whishlist for a particular user
    const user:userdetail1[] = useSelector((state:globalstore) => state.userdetail)       // Getting the current user who is logged in
    const handleWishList = (id:string, email:string) => {
        let bool = false
        let userdata = JSON.parse(localStorage.getItem("userdata")??"null")
        let index = userdata.findIndex((curEle:userdetail1) => curEle.email == email)
        if (userdata[index].wishlist && index >= 0) {
            let some = userdata[index].wishlist.some((curEle:course) => curEle.id == id)
            if (some) bool = true
        }
        return bool
    }
    // Adding wishlist course in my single data storage
    const addWishCourse = (email:string, course:course, category:string) => {
        console.log(email, course, category);
        let userdata = JSON.parse(localStorage.getItem("userdata") ?? "null")
        let individual = userdata.filter((curEle:userdetail1) => curEle.email == email)
        if (individual[0].wishlist == undefined || individual[0].wishlist == null) {
            individual[0].wishlist = [course]
        }
        else {
            if (individual[0].wishlist.length == 1) {
                console.log("length is one");
                if (individual[0].wishlist[0].id !== course.id) {
                    individual[0].wishlist.push(course)
                }
                else {
                    console.log("Hello we are same");
                    individual[0].wishlist.splice(0, 1)
                    setBool(false)
                    console.log(individual[0].wishlist.length);
                    // setFinalBool(false)
                    // setBool(false)
                }
            }
            else {
                console.log("length is more than one");
                console.log(individual[0].wishlist);
                let bool = individual[0].wishlist.some((curEle:course) => curEle.id == course.id)
                console.log(bool);
                if (!bool) {
                    individual[0].wishlist.push(course)
                }
                else {
                    // console.log(id);
                    console.log(individual[0].wishlist);
                    let index = individual[0].wishlist.findIndex((curEle:course) => { return curEle.id == course.id })
                    console.log(index);
                    individual[0].wishlist.splice(index, 1)
                    setBool(false)
                    // setFinalBool(false)
                }
            }
        }
        console.log(individual);
        console.log(userdata);
        // dispatch(enrollWishCourse(email,course,category))
        localStorage.setItem("userdata", JSON.stringify(userdata))
    }
    // To make the wishlist change conditionally first time
    const handleInitilWish = (id:string) => {
        console.log(id);
        setBool(!bool)
    }
  return (
     <Box className='right-section-main'
                    sx={{ ml: "17.4rem !important", mt: "5rem !important", mb: "1.5rem" }}
                >
                    {/* <div> */}
                    <Grid container spacing={{ lg: 3, md: 2, sm: 2, xs: 2 }} className='ul' sx={{ pr: "20px !important" }} >
                        {
                            courses.map((curEle:course) => {
                                return <Grid key={curEle.id} className='li grid_container' size={{ xl: 3, lg: 4, md: 6 }}
                                    sx={{}}
                                >
                                    <Card sx={{
                                        '&:hover': {
                                            transform: "scale(1.03)"
                                        },
                                        pb: "0.5rem",
                                        boxShadow: "0px 0px 5px grey",
                                        textAlign:"left"
                                    }} className='course_card'>
                                        <NavLink to={`/${curEle.id}`} >
                                            <CardMedia
                                                className="card-img-top"
                                                sx={{ height: '170px', width: '100%', objectFit: 'cover' }}
                                                image={curEle.image}
                                                title="green iguana"
                                            />
                                        </NavLink>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{m:"1rem !important"}} >
                                                {curEle.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "0.8rem",m:"1rem !important"}}>
                                                {curEle.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions
                                            sx={{ display: 'flex', justifyContent: "space-between", p: "10px 15px !important" }}
                                        >
                                            <Button size="small" variant='contained' sx={{ fontSize: "11px",p:"0.3rem !important"}} >
                                                <NavLink to={`/${curEle.id}`} className="" style={{ color: "white", textDecorationLine: "none" }}>For more Details</NavLink>
                                            </Button>
                                            <Typography>{curEle.price} ₹</Typography>
                                            <Typography>⭐{curEle.rating}</Typography>
                                            {userlogin ?
                                                <FaHeart
                                                    style={{ fontSize: "1.4rem" }}
                                                    className={(handleWishList(curEle.id, user[0].email)) ? "success_wish" : "whishlist"} onClick={(e) => {
                                                        e.stopPropagation();
                                                        // addWishListCourse(curEle)
                                                        addWishCourse(user[0].email, curEle, "wishcourse")
                                                        handleInitilWish(curEle.id)
                                                        // dispatch(toggleSignUp("hy"));
                                                    }} />
                                                : <FaHeart style={{ fontSize: "1.4rem" }} className='whishlist' onClick={(e) => {
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
                    {/* </div> */}
                </Box>
  )
}

export default RightSide1