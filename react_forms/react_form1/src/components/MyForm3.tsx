//! importing required packages
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { Box, TextField, Stack } from "@mui/material"

//! creating a input field 
type Input3 = {
    firstname:string,
    lastname:string,
    age:number,
    college:string,
    email:string,
    branch:string
}

const MyForm3 = () => {
    const{register,handleSubmit}=useForm<Input3>()
    const onSubmit : SubmitHandler<Input3> = (data) => console.log(data);
  return (
    <Box component="section" >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} >
            <Stack direction={"column"} width={{xs:"90%",xl:"25rem",lg:"25rem",md:"25rem",sm:"25rem"}} sx={{m:"auto"}} >
                <TextField placeholder="first name" {...register("firstname",{required:true})} />
                <TextField placeholder="last name" {...register("lastname")} />
                <TextField placeholder="age" {...register("age",{min:18,max:58})} />
                <TextField placeholder="college" {...register("college")} />
                <TextField placeholder="email" {...register("email",{pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{4,8}$/})} />
                <TextField placeholder="branch" {...register("branch")} />
                <TextField type="submit" />
            </Stack>
        </Box>
    </Box>
  )
}

export default MyForm3