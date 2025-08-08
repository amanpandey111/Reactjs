import { useForm, FormProvider, useFormContext } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface formdata {
    name: string
    email: string
    password: string | number
}

function MyNameInput() {
    const { register, formState: { errors } } = useFormContext()
    return (
        <div className="fromGroup">
           <label htmlFor="">Name</label>
           <input type="text" { ...register("name") } /> 
        </div>
    )
}
function MyPassword(){
    const { register, formState:{errors} } = useFormContext()
    return(
        <div className="fromGroup">
            <label htmlFor="">Password</label>
            <input type="text" {...register("password")} />
        </div>
    )
}

const MyFormContext1 = () => {
    const myform = useForm<formdata>()

    const onSubmit:SubmitHandler<formdata> = (data) => console.log(data);
  return (
    <FormProvider {...myform}>
        <div className="userFrom" style={{marginTop:"3rem"}} >
            <form action="" onSubmit={myform.handleSubmit(onSubmit)} >
                <MyNameInput/>
                <div className="fromGroup" >
                    <label htmlFor="">Email : </label>
                    <input type="text" 
                    {
                        ...myform.register("email")
                    }
                    />
                </div>
                <MyPassword/>
                <button type="submit" >submit</button>
            </form>
        </div>
    </FormProvider>
  )
}

export default MyFormContext1