import { useForm, Controller } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface formdata{
    name:string,
    email:string,
    phone:number[],
    address:{
        city:string
        pincode:number
    }
}

const Controller2 = () => {
    const { control, handleSubmit } = useForm<formdata>()
    const onSubmit : SubmitHandler<formdata> = data => console.log(data);
  return (
    <div className="userFrom" style={{marginTop:"3rem"}} >
        <form onSubmit={handleSubmit(onSubmit)}> 
            <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({field, fieldState}) => (
                <div className="fromGroup">
                    <label>UserName : </label>
                    <input type="text" {...field} />
                    <p>{fieldState.error?.message}</p>
                </div>
            )}
            rules={{
                required:"Username is required"
            }}
            />
            <Controller
            name="email"
            control={control}
            render={({field, fieldState}) => (
                <div className="fromGroup">
                    <label htmlFor="">Email : </label>
                    <input type="text" {...field} />
                    <p>{fieldState.error?.message}</p>
                </div>
            )}
            />
            <Controller
            name="phone.0"
            control={control}
            render={({field, fieldState}) => (
                <div className="fromGroup">
                    <label htmlFor="">Phone : </label>
                    <input type="number" {...field} />
                </div>
            )}
            />
            <Controller
            name="phone.1"
            control={control}
            render={({field, fieldState}) => (
                <div className="fromGroup">
                    <label htmlFor="">Secondary phone : </label>
                    <input type="number" {...field} />
                    <p>{fieldState.error?.message}</p>
                </div>
            )}
            rules={{
                // valueAsNumber:true,
                required:"Secondary phone is required"
            }}
            />
            <Controller
            name="address.city"
            control={control}
            render={({field, fieldState}) => (
                <div className="fromGroup">
                    <label htmlFor="">city : </label>
                    <input type="text" {...field} />
                    <p>{fieldState.error?.message}</p>
                </div>
            )}
            />
            <Controller
            name="address.pincode"
            control={control}
            render={({field, fieldState}) => (
                <div className="fromGroup">
                    <label htmlFor="">pincode : </label>
                    <input type="number" {...field} />
                </div>
            )}
            />
            <button className="submit">Submit</button>
        </form>
        <DevTool control={control} />
    </div>
  )
}

export default Controller2