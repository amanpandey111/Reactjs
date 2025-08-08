import { NavLink, useNavigate } from "react-router";    // for navigations purpose
import "./ui.css";                                      // importing css
import { FaUser } from "react-icons/fa";                // React Icons
import { useDispatch, useSelector } from "react-redux"; // React router hook for accessing value and action(to change the values)
import { addArray, isUserExists, setInputText, setInputText2, setUserInput, toggleSignIn, toggleSignUp, userLogin } from "../../store"; // redux actions to change values
import SignUp from "./SignUp";                          // Signup component where our signup form is present
import LogIn from "./LogIn";                            // Login component where our login form is present
import { useState } from "react";                       // React Hooks
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';        // hamburgeer menu icon to display categories of courses availabel
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import LeftSide from "./LeftSide";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Header = () => {
  const dispatch = useDispatch();                        // main thing to make changes in our react-redux
  // const inputText = useSelector((state) => state.inputText); // this is the text in input box
  const [suggestion, setSuggestion] = useState([]);      // Array which contain a suggested courses
  // const [refBool, setRefBool] = useState(false);      // boolean for the list of suggested Item
  const [open, setOpen] = useState(false);               // for drawer purpose
  const [selectedItem, setSelectedItem] = useState(0);   // for keyboard navigation
  const[inputText3,setInputText3] = useState("hello")
  const toggleDrawer = (newOpen) => () => {
    console.log("toggledrawer");
    console.log(newOpen);
    setOpen(newOpen);
  };

  const userinput = useSelector((state) => state.userinput);         // To toggle the input box between searching for entire course of user courses and wishlist
  const userinputtext = useSelector((state) => state.userinputtext); // this text if for another input box which will only search user enrolled courses & wishlist courses
  const userdata = JSON.parse(localStorage.getItem("userdata"));     // userdata for getting the course they enrolled and wishlish courses they are enrolled
  const userdetail = useSelector((state) => state.userdetail);       // Getting current user detail so we can suggest the related courses they enrolled and wishlist
  const [suggestion2, setSuggestion2] = useState([]);
  const mycourse = useSelector((state) => state.mycourse);           // Getting the entire courses for all users
  const signup = useSelector((state) => state.signup);               // signup form toggle
  const signin = useSelector((state) => state.signin);               // Signin form toggle
  const userlogin = useSelector((state) => state.userlogin);         // userlogin toggle to hide signup,signin button and display user logo and logout button
  const navigate = useNavigate();

  // Let's Get the Related Categories
  const alldata = mycourse.flatMap((curEle) => curEle.courses);      // Getting all courses from userdata only courses with the help of flatMap() :- Removes array boundary

  console.log(suggestion);
  // Handle keyboard navigation for both input boxes
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    } else if (e.key === "ArrowDown" && selectedItem < suggestion.length - 1) {
      setSelectedItem((prev) => prev + 1);
    } else if (e.key === "Enter" && selectedItem >= 0) {
      setInputText3("")
      const selectedCourse = suggestion[selectedItem];
      console.log(selectedCourse);
      if (selectedCourse && selectedCourse.id) {
        // If the course has a valid 'id', navigate to the course details page
        navigate(`/${selectedCourse.id}`);
        setSuggestion([])
        setSelectedItem(-1)
        
      }
    }
  };
  const handleKeyDown1 = (e) => {
    if (e.key === "ArrowUp" && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    } else if (e.key === "ArrowDown" && selectedItem < suggestion2.length - 1) {
      setSelectedItem((prev) => prev + 1);
    } else if (e.key === "Enter" && selectedItem >= 0) {
      const selectedCourse = suggestion2[selectedItem];
      console.log(selectedCourse);
      if (selectedCourse && selectedCourse.id) {
        // If the course has a valid 'id', navigate to the course details page
        navigate(`/${selectedCourse.id}`);
        setSuggestion2([])
        setSelectedItem(-1)
      }
    }
  };

  const handleInputChange2 = (e, value) => {
    let current_user_info = userlogin ? userdata.filter((curEle) => curEle.email == userdetail[0].email) : [];
    if (current_user_info[0].courses.length || current_user_info[0].wishlist.length) {
      let alldata = [...current_user_info[0].courses, ...current_user_info[0].wishlist];
      let suggestion = alldata.filter((curEle) => curEle.name.toLowerCase().includes(value.toLowerCase()));

      const uniqueIds = new Set();
      const uniqueSuggestions = suggestion.filter((curEle) => {
        if (!uniqueIds.has(curEle.id)) {
          uniqueIds.add(curEle.id); // Add the ID to the Set
          return true; // Keep this element
        }
        return false; // This ID has already been seen, so discard this element
      });
      if (value.trim() == "") {
        dispatch(setInputText2(""));
        setSuggestion2([]);
      } else {
        setSuggestion2(uniqueSuggestions);
      }
    }
  };
  const handleInputChange = (e, value) => {
    console.log(value);
    setInputText3(value)
    if (value.trim() == "") {
      dispatch(setInputText(""));
      setSuggestion([]);
      return;
    }
    dispatch(setInputText(value))
    const filtered = alldata.filter((curEle) => curEle.name.toLowerCase().includes(value.toLowerCase()));
    setSuggestion(filtered.slice(0, 6));
  };

  console.log(inputText3);
  return (
    <Box className="header" sx={{ position: "fixed", width: "100%", bgcolor: "#232F3E", zIndex: 1, display: "block", p: "0rem 1rem 0rem 0.3rem" }}>
      <Stack direction={"row"} className="header-section"                                                                                   
        sx={{ justifyContent: "space-between", margin: "auto", alignItems: "center", padding: "0.7rem 0.3rem" }}
      >
        <Stack direction="row" spacing={1}>
          <Box component="div" className="menu-icon">
            <MenuIcon onClick={(toggleDrawer(true))} sx={{ color: "white", cursor: "pointer", fontSize: "2rem" }} />
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <LeftSide open={open} toggleDrawer={toggleDrawer} setOpen={setOpen} onClick={() => {toggleDrawer(false) ; console.log("drawer open")} } />
            </Drawer>
          </Box>
          <Box>
            <NavLink to="/">
              <CardMedia component="img" image={`logo.png`} alt="" onClick={() => { dispatch(addArray(true)); dispatch(setUserInput(false)) }} className="logo-img" />
            </NavLink>
          </Box>
        </Stack>
        {
          userinput ?
            <Autocomplete
              className="auto1"
              onKeyDown={handleKeyDown1}
              value={userinputtext}
              // value={inputText3}
              clearIcon={null}
              popupIcon={null}
              open={suggestion2.length > 0}
              onInputChange={handleInputChange2} // Update filtered suggestions on input change   
              onChange={(e) => { dispatch(setInputText2(e.target.value)) }}
              getOptionLabel={(option) => option && option.name ? option.name : ""}
              options={suggestion2}
              sx={{
                width: "20rem", color: "white", textDecoration: "none", outline: "none",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none', // Remove the border
                  },
                  '&:hover fieldset': {
                    border: 'none', // Remove border on hover
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none', // Remove border on focus
                  },
                },
                '& .MuiInputBase-root': {
                  color: 'black', // text color
                  backgroundColor: 'white', // background color
                  borderRadius: '3px',
                  height: '40px'
                },
              }}
              renderInput={(params) => <TextField {...params} placeholder="search enrolled courses and wishlist courses" sx={{ color: "white" }} />}
              renderOption={(props, option, state) => (
                <Box sx={{ width: "95%", m: "auto", borderRadius: "0.3rem", pl: "0.3rem", pt: "0.3rem" }} >
                  <NavLink to={`/${option.id}`}
                    style={{ textDecorationLine: "none" }}
                    onClick={() => {
                      dispatch(setInputText2(""));
                      setSuggestion2([]);
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                      }
                    }}>
                    <Typography sx={{
                      color: selectedItem === state.index ? "white" : "black", pt: "0.3rem", pb: "0.3rem", pl: "0.3rem", borderRadius: "0.4rem", fontFamily: "sans-serif",
                      '&:hover': {
                        color: "white",
                        bgcolor: "#232F3E",
                      },
                      backgroundColor: selectedItem === state.index ? "#232F3E" : "transparent", // Apply background color for selected item
                    }} >{option.name}</Typography>
                  </NavLink>
                </Box>
              )}
            />
            :
            <Autocomplete
              className="auto1"
              // value={inputText3}
              onKeyDown={handleKeyDown}
              clearIcon={null}
              popupIcon={null}
              options={suggestion}
              open={suggestion.length > 0}
              onInputChange={handleInputChange} // Update filtered suggestions on input change
              onChange={(e) => { dispatch(setInputText(e.target.value)) }}
              getOptionLabel={(option) => option && option.name ? option.name : ""}
              disablePortal
              openOnFocus={true}
              autoHighlight={true}
              sx={{
                width: "20rem", color: "white",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none', // Remove the border
                  },
                  '&:hover fieldset': {
                    border: 'none', // Remove border on hover
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none', // Remove border on focus
                  },
                },
                '& .MuiInputBase-root': {
                  color: 'black', // text color
                  backgroundColor: 'white', // background color
                  borderRadius: '8px',
                  height: '40px'
                },
              }}
              renderInput={(params) => <TextField {...params} variant="outlined" placeholder="search courses" />}
              renderOption={(props, option, state) => (
                <Box sx={{ width: "95%", m: "auto", borderRadius: "3rem", pl: "0.3rem", pt: "0.3rem" }} >
                  <NavLink to={`/${option.id}`}
                    style={{ textDecorationLine: "none" }}
                    onClick={() => {
                      dispatch(setInputText(""));
                      setSuggestion([]);
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                      }
                    }}>
                    <Typography sx={{
                      color: selectedItem === state.index ? "white" : "black" , pt: "0.3rem", pb: "0.3rem", pl: "0.3rem", borderRadius: "0.4rem", fontFamily: "sans-serif",
                      '&:hover': {
                        color: "white",
                        bgcolor: "#232F3E",
                      },
                      backgroundColor: selectedItem === state.index ? "#232F3E" : "transparent", // Apply background color for selected item
                    }} >{option.name}</Typography>
                  </NavLink>
                </Box>
              )}
            />
        }

        <Stack direction="row" spacing={2}
          sx={{ alignItems: "center" }}
        >
          {userlogin ?
            <NavLink to="/userdetail"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setUserInput(true));
                dispatch(setInputText(""))
              }}><FaUser style={{ color: "white", fontSize: "1.8rem", cursor: "pointer" }} className="user-profile"
              /></NavLink>
            : <Button variant="contained"
              sx={{
                fontFamily: "sans-serif",
              }}
              className="common-btn" onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleSignUp("hy"));
                dispatch(toggleSignIn(false));
                dispatch(isUserExists(false));
                dispatch(setInputText(""))
              }} >Sign Up</Button>}

          {signup && <SignUp />}

          {userlogin ? <Button variant="contained" className="common-btn" onClick={(e) => {
            e.stopPropagation();
            dispatch(userLogin(false));
            navigate("/");
            dispatch(addArray(true));
          }} >Log out</Button> : <Button variant="contained"
            sx={{
              fontFamily: "sans-serif"
            }}
            className="common-btn" onClick={(e) => {
              e.stopPropagation()
              dispatch(toggleSignIn("toggle"))
              dispatch(toggleSignUp(false))
              dispatch(setInputText(""))
            }}>Sign in</Button>}

          {signin && <LogIn />}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;