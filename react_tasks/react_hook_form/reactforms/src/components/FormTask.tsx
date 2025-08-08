import { Autocomplete, Box, Button, Checkbox, createTheme, Dialog, DialogActions, DialogTitle, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, TextField, ThemeProvider, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useState } from "react"

// applying th common style to error message
const commonError = {
    color:"red"
}

// definign the type 
interface userdetail{
    address:string,
    age:number|string,
    courses:string[]
    degree:string
    firstname:string
    gender:string
    intermediate:string
    lastname:string
    school:string
}

const FormTask = () => {
    const userdetail = JSON.parse(localStorage.getItem("userdetail")!)
    // console.log(userdetail);
    const [suggestion,setSuggestion] = useState([])
    const [inputvalue,setInputValue] = useState("")
    const [open, setOpen] = useState<boolean>(false);
    const [userprofile1,setuserProfile] = useState<userdetail>()   // current userprofile

    const handleClickOpen = (data:userdetail) => {
        console.log(data);
        setuserProfile(data)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        console.log(userprofile1);
        setValue("firstname",userprofile1?.firstname!)
        setValue("lastname",userprofile1?.lastname!)
        setValue("age",userprofile1?.age!)
        setValue("school",userprofile1?.school!)
        setValue("intermediate",userprofile1?.intermediate!)
        setValue("degree",userprofile1?.degree!)
        // setValue("courses","HTML")
        setValue("address",userprofile1?.address!)
        setValue("gender",userprofile1?.gender!,{ shouldValidate:true})
        setValue("courses",userprofile1?.courses!,{ shouldValidate:true})
    };
    // console.log(coursCheck);

    const theme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        width: "100% !important",
                    }
                }
            }
        }
    })

    const myform = useForm<userdetail>({
        defaultValues:{
            address:"",
            age:"",
            courses:[],
            degree:"",
            firstname:"",
            gender:"",
            intermediate:"",
            lastname:"",
            school:""
        },
        mode:"onChange",
        reValidateMode:"onChange"
    })
    const { register, handleSubmit, reset, watch, setValue, setError, control, formState:{errors,isReady,isDirty,isValid,touchedFields,validatingFields} } = myform
    // console.log({isDirty,isValid,touchedFields,validatingFields,isReady});
    const watchgender = watch("gender")
    const watchcourses = watch("courses")
    const watchfirst = watch("firstname")
    const watchlast = watch("lastname")
    const watchschool = watch("school")
    const watchinter = watch("intermediate")

    // console.log(watchcourses);
    const onSubmit : SubmitHandler<userdetail> = (data) => {
        console.log(data)
        console.log(userprofile1);
        if(userdetail==null){
            localStorage.setItem("userdetail",JSON.stringify([data]))
        }
        else{
            if(data && userprofile1 ){
                console.log("we got the data");
                const findindex = userdetail.findIndex((curEle:userdetail)=> curEle.firstname.toLowerCase() == userprofile1.firstname.toLowerCase())
                console.log(findindex);
                userdetail.splice(findindex,1,data)
                console.log(userdetail);
                localStorage.setItem("userdetail",JSON.stringify(userdetail))
                setuserProfile(undefined)
            }else{
                if(userdetail.length==1){
                    if((data.firstname.toLocaleLowerCase() !== userdetail[0].firstname.toLocaleLowerCase()) || (data.lastname.toLocaleLowerCase() !== userdetail[0].lastname.toLocaleLowerCase())){
                        userdetail.push(data)
                        console.log(userdetail);
                        localStorage.setItem("userdetail",JSON.stringify(userdetail))
                    }
                }else{
                    let bool = userdetail.some((curEle:any)=>(data.firstname.toLocaleLowerCase() == curEle.firstname.toLocaleLowerCase()) && (data.lastname.toLocaleLowerCase() == curEle.lastname.toLocaleLowerCase()))
                    console.log(bool);
                    if(!bool){
                        userdetail.push(data)
                        console.log(userdetail);
                        localStorage.setItem("userdetail",JSON.stringify(userdetail))
                    }
                }
            }
        }
        reset()
    }
    // reset({gender:"male"})

    const handleInput = (event:any) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '')
    }

    const handleInputChange = (event:any,value:string) => {
        console.log(value);
        setInputValue(value)
        console.log(userdetail);
        if(value.trim() == ""){
            console.log("no value");
            setSuggestion([])
        }else{
            let suggest = userdetail.filter((curEle:userdetail)=> (curEle.firstname.toLowerCase() + " "+ curEle.lastname.toLowerCase()).includes(value.toLowerCase()))
            console.log(suggest);
            setSuggestion(suggest)
        }
    }

    const isChecked = (skillValue: string) => {
        if(watchcourses){
            return watchcourses?.includes(skillValue);
        }
    };

    // localStorage.removeItem("userdetail")
    // console.log({isDirty,isValid});
    return (
        <ThemeProvider theme={theme} >
            <Box component="section" >
                <Box component="div" sx={{ width: {xl:"25%",lg:"30%",md:"40%",sm:"50%",xs:"80%"}, margin: "auto",py:"1rem" }} >
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} >
                        <Stack spacing={3}>
                            <Box component="div" sx={{}} >
                                <Typography variant="h6" >Search For Existing User</Typography>
                                {/* <TextField placeholder="User Name" /> */}
                                <Autocomplete
                                clearIcon={null}
                                popupIcon={null}
                                inputValue={inputvalue}
                                onInputChange={handleInputChange}
                                options={suggestion}
                                open={suggestion.length > 0}
                                renderInput={(params) => <TextField {...params} placeholder="search user" />}
                                getOptionLabel={(option:userdetail) => option && option.firstname + " "+ option.lastname ? option.firstname + " "+ option.lastname : ""}
                                renderOption={(props,option,state)=>(
                                    <Box sx={{my:"0.4rem",ml:"0.5rem",cursor:"pointer"}} >
                                        <Typography onClick={()=>handleClickOpen(option)} >
                                            {option.firstname + " "+ option.lastname}
                                        </Typography>
                                    </Box>
                                )}
                                />
                            </Box>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                {"User Exists"}
                                </DialogTitle>
                                <DialogActions>
                                <Button onClick={handleClose} variant="contained" >
                                    Ok
                                </Button>
                                </DialogActions>
                            </Dialog>
                            <Box component="div" >
                                <Typography variant="h6" >Bio Data Form</Typography>
                                <Stack spacing={1} sx={{}} >
                                    <TextField InputProps={{ readOnly:watchfirst==userprofile1?.firstname }} sx={{ width: "14rem" }} {...register("firstname",{
                                        required:"First name is required",
                                    })} placeholder="first name" />
                                    { errors.firstname && <Typography sx={commonError} variant="body1" >{errors.firstname?.message}</Typography> }
                                    <TextField InputProps={{ readOnly:watchlast==userprofile1?.lastname }} sx={{ width: "14rem" }} {...register("lastname",{
                                        required:"Surname is required",
                                    })} placeholder="surname" />
                                    { errors.lastname && <Typography sx={commonError} variant="body1" >{errors.lastname?.message}</Typography> }
                                    <TextField type="number" sx={{ width: "14rem" }} {...register("age",{
                                        required:"Age is required",
                                        min:{
                                            value:15,
                                            message:"Age Must be Greater than 14"
                                        },
                                        max:{
                                            value:100,
                                            message:"Age must below 101"
                                        },
                                        valueAsNumber:true
                                    })} placeholder="age" onInput={handleInput} />
                                    { errors.age && <Typography sx={commonError} variant="body1" >{errors.age?.message}</Typography> }
                                </Stack>
                            </Box>
                            <Box component="div" >
                                <FormControl>
                                    <FormLabel sx={{color:"black"}} > <Typography variant="h6" >Gender</Typography> </FormLabel>
                                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group"
                                    value={watchgender}
                                    onChange={(event)=>setValue("gender",event.target.value,{ shouldValidate: true, shouldDirty: true })}
                                    >
                                        <FormControlLabel value="male" control={<Radio {...register("gender",{
                                        required:"Gender is Required"
                                        })} />}   label="Male" />  
                                        <FormControlLabel value="female" control={<Radio {...register("gender",{
                                        required:"Gender is Required"
                                        })} />} label="Female" />
                                        <FormControlLabel value="others" control={<Radio {...register("gender",{
                                        required:"Gender is Required"
                                        })} />}  label="Others" />
                                    </RadioGroup>
                                    { errors.gender && <Typography sx={commonError} variant="body1" >{errors.gender?.message}</Typography> }
                                </FormControl>
                            </Box>
                            <Box component="div" >
                                <Typography variant="h6" >Education</Typography>
                                <Stack spacing={1} sx={{}} >
                                    <TextField sx={{ width: "14rem" }} placeholder="Schooling" {...register("school",{
                                        required:"schooling is required"
                                    })} />
                                    { errors.school && <Typography sx={commonError} variant="body1" >{errors.school?.message}</Typography> }
                                    <TextField sx={{ width: "14rem" }} placeholder="Intermediate" {...register("intermediate",{
                                        required:"Intermediate is required",
                                        onChange : () => {
                                            if(watchschool.length<1){
                                                setValue("intermediate","")
                                                setError("intermediate",{
                                                    type:"manual",
                                                    message:"Please Enter Your Schooling Education"
                                                })
                                            }
                                        },
                                    })} />
                                    { errors.intermediate && <Typography sx={commonError} variant="body1" >{errors.intermediate?.message}</Typography> }
                                    <TextField sx={{ width: "14rem" }} placeholder="Degree" {...register("degree",{
                                        required:"Degree is required",
                                        onChange : () => {
                                            if(watchschool.length<1 && watchinter.length<1){
                                                 setValue("degree","")
                                                 setError("degree",{
                                                     type:"manual",
                                                     message:"Please Enter Schooling And Intermediate Education"
                                                 })
                                            }
                                        },
                                    })} />
                                    { errors.degree && <Typography sx={commonError} variant="body1" >{errors.degree?.message}</Typography> }
                                </Stack>
                            </Box>
                            <Box component="div" >
                                <FormControl>
                                    <FormLabel sx={{color:"black"}} ><Typography variant="h6" >Skills</Typography></FormLabel>
                                    <FormGroup>
                                        {
                                            ["HTML","CSS","JavaScript","React","Others"].map((skill)=>(
                                                <FormControlLabel
                                                key={skill}
                                                control={
                                                    <Checkbox
                                                    { ...register("courses",{ required:"Please Select Atleast One Course" }) }
                                                    value={skill}
                                                    checked={isChecked(skill)}
                                                    onChange={(e)=>{
                                                        const currentSkills = watchcourses || []; // Ensure it's an array
                                                        let newSkills;
                                                        if (e.target.checked) {
                                                            newSkills = [...currentSkills, skill];
                                                        } else {
                                                            newSkills = currentSkills.filter((s) => s !== skill);
                                                        }
                                                        setValue("courses", newSkills, {
                                                           shouldValidate: true,
                                                           shouldDirty: true,
                                                        });
                                                    }}  
                                                    />
                                                }
                                                label={skill}
                                                />
                                            ))
                                        }
                                    </FormGroup>
                                    { errors.courses && <Typography sx={commonError} variant="body1" >{errors.courses?.message}</Typography> }
                                </FormControl>
                            </Box>
                            <Box component="div" >
                                <Typography variant="h6" >Address</Typography>
                                <TextField placeholder="Address" {...register("address",{
                                    required:"Address is Required"
                                })} />
                                { errors.address && <Typography sx={commonError} variant="body1" >{errors.address?.message}</Typography> }
                            </Box>
                            <Box component="div" sx={{textAlign:"center"}} >
                                <Button disabled={!isValid || !isDirty } variant="contained" type="submit">Save</Button>
                            </Box>
                        </Stack>
                    </Box>
                    <DevTool control={control} />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default FormTask