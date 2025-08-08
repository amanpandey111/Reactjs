import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface formdata{
    name:string,
    email:string,
    phone:number
}


const UserinfoValidate = () => {
    const myform = useForm<formdata>()
    const { register, handleSubmit, control ,formState:{errors} } = myform
    // console.log(formState);
    const formsubmit : SubmitHandler<formdata> = (data)=> console.log(data);
  return (
    <>
       <div className='userFrom'>
            <h2>User Info Details</h2>
            <form action="#" className='userDetailForm' onSubmit={handleSubmit(formsubmit)} >
                <div className='fromGroup' style={{marginTop:"20px"}} >
                    <label htmlFor="name">Name</label>
                    <input autoComplete='off' type="text" id="name" placeholder='Enter your name' {...register("name",{
                        required:{
                            value:true,
                            message:"Name is required"
                        }
                    })} />
                    <p className="error" >{errors.name?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor="email">Email</label>
                    <input autoComplete='off' id="email" type="email" placeholder='Enter your email' {...register("email",{
                        pattern:{
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:"your email address is not valid"
                        }
                    })} />
                    <p className="error" >{errors.email?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Mobile No.</label>
                    <input autoComplete='off' id="phone" type="number" placeholder='Enter your number' {...register("phone",{
                        required:{
                            value:true,
                            message:"Phone Number is required"
                        }
                    })} />
                    <p className="error" >{errors.phone?.message}</p>
                </div>
                <div className='fromGroup'>
                    <input type="submit" value="Save" />
                </div>
            </form>
            <DevTool control={control} />
        </div>
    </>
  )
}
export default UserinfoValidate
