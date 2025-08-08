import { useForm, useController } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface userdetail{
    name:string,
    email:string,
    address:{
        city:string,
        pincode:number
    }
    password:string
}

const NestedObject = () => {
    const myform = useForm<userdetail>()
    const{ control, handleSubmit } = myform

    const { field:name, fieldState:namestate} = useController({
        name:"name",
        control,
        rules : {
            required:"name is required",
            minLength:{
                value:3,
                message:"Name Must Be atleast 3 charcters"
            }
        }
    })
    const { field:email, fieldState:emailstate} = useController({
        name:"email",
        control,
        rules:{
            required:"Email is required",
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Please enter a valid email address"
            },
            validate:{
                notAdmin:(value)=> value !== "admin@gmail.com" || "Enter a different email"
            }
        }
    })
    const {field:password, fieldState:passwordstate} = useController({
        name:"password",
        control,
        rules:{
            required:"Password is required",
            minLength:{
                value:8,
                message:"Password must be at least 8 characters long"
            }
        }
    })
    const {field:city, fieldState:citystate} = useController({
        name:"address.city",
        control,
        rules:{
            required:"City is required",
            minLength:{
                value:2,
                message:"City must be at least 2 characters long"
            }
        }
    })
    const {field:pincode, fieldState:pincodestate} = useController({
        name:"address.pincode",
        control,
        rules:{
            required:"City is required",
            minLength:{
                value:2,
                message:"City must be at least 2 characters long"
            }
        }
    })

    const onSubmit : SubmitHandler<userdetail> = (data) => console.log(data);
  return (
    <div className="userFrom"  style={{marginTop:"3rem"}} >
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="fromGroup" >
                <label htmlFor="">Name :</label>
                <input type="text" {...name} />
                <p className="error">{namestate.error?.message}</p>
            </div>
            <div className="fromGroup" >
                <label htmlFor="">Email :</label>
                <input type="text" {...email} />
                <p className="error">{emailstate.error?.message}</p>
            </div>
             <div className="fromGroup" >
                <label htmlFor="">City :</label>
                <input type="text" {...city} />
                <p className="error">{emailstate.error?.message}</p>
            </div>
             <div className="fromGroup" >
                <label htmlFor="">Password :</label>
                <input type="text" {...pincode} />
                <p className="error">{emailstate.error?.message}</p>
            </div>
            <div className="fromGroup" >
                <label htmlFor="">Password :</label>
                <input type="password" {...password} />
                <p className="error">{passwordstate.error?.message}</p>
            </div>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
     </div>
  )
}

export default NestedObject