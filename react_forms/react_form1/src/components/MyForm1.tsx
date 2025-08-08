import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { Box, TextField } from '@mui/material'

type Inputs1 = {
    firstname:string,
    lastname:string,
    age:number,
    boolean:boolean,
    company:string,
    role:string
}

const MyForm1 = () => {
    const {
        register,
        handleSubmit,
        watch
    } = useForm<Inputs1>()
    const onSubmit : SubmitHandler<Inputs1> = (data) => console.log(data);
    console.log(watch("company"));
  return (
    <Box component="section" sx={{textAlign:"center"}} >
        <Box component="form" sx={{border:"2px solid red"}} onSubmit={handleSubmit(onSubmit)}>
            <TextField placeholder="First Name" {...register("firstname")} /><br />
            <TextField placeholder="Last Name"  {...register("lastname")} /><br />
            <TextField placeholder="Age"        {...register("age")} /><br />
            <TextField placeholder="boolean"    {...register("boolean")} /><br />
            <TextField placeholder="company"    {...register("company")} /><br />
            <TextField placeholder="role"       {...register("role")} /><br />
            <TextField type="submit" placeholder="submit" />
        </Box>
    </Box>
  )
}

export default MyForm1