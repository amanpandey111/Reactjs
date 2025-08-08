import './component.css'
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { Box, Stack, TextField } from "@mui/material"

type Input2={
    firstname:string,
    lastname:string,
    age:number,
    company:string,
    boolean:string|boolean
}

const MyForm2 = () => {
    const{
        register,
        handleSubmit
    }=useForm<Input2>()
    const onSubmit : SubmitHandler<Input2> = (data) => console.log(data);
  return (
    <Box component="section">
        <Box component="form" onSubmit={handleSubmit(onSubmit)} >
            <Stack direction="column" width={{xs:"90%",xl:"25rem",lg:"25rem",md:"25rem",sm:"25rem"}} sx={{m:"auto"}} className="inputstack" >
                <TextField placeholder="firstname" {...register("firstname")} />
                <TextField placeholder="lastname" {...register("lastname")} />
                <TextField placeholder="age" {...register("age")} />
                <TextField placeholder="company" {...register("company")} />
                <TextField placeholder="boolean" {...register("boolean")} />
                <TextField type="submit" value="submit form" sx={{cursor:"pointer",color:"red"}} />
            </Stack>
        </Box>
    </Box>
  )
}

export default MyForm2