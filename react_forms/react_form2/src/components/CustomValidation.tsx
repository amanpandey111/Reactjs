import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type Inputs = {
    name:string,
    email:string,
    phone:number
}
const CustomValidation = () => {
    const form = useForm<Inputs>()
    const {register,control,handleSubmit,formState:{errors}} = form
    // console.log(form);
    // console.log(register('aman pandey'));
    const formSubmit : SubmitHandler<Inputs> = (data) => {
        console.log("form Submit", data);
    }
  return (
    <>
        <div className='userFrom'>
            <h2>User Info Details</h2>
            {/* <h3>My Components Rerender - {componentRerender}</h3> */}
            <form action="#" className='userDetailForm' onSubmit={handleSubmit(formSubmit)} >
                <div className='fromGroup'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {...register('name',{
                        required: {
                            value: true,
                            message: "Please Fill Your Good Name"
                        },
                        validate:(fieldvalue)=>{
                            return fieldvalue.toLowerCase() !== "admin" || "admin is not allowed"
                        }
                    })} placeholder='Enter your name' />
                    <p className='error' >{errors.name?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor="name">Email</label>
                    <input id="email" type="email" {...register('email',{
                        required:{
                            value:true,
                            message:"Please Fill Your Email Address"
                        },
                        pattern:{
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:"Your Email Address is Not Valid"
                        },
                        // validate:(fieldvalue)=>{
                        //     return fieldvalue.toLowerCase() !== "admin@admin.com" || "this(admin) email is not allowed"
                        // }
                        validate:{
                            notAdminEmail : (data) => data.toLowerCase() !== "admin@admin.com" || "admin email is not alloed",
                            blockDomain : (data) => !data.endsWith('.edu') || ".com domain are not allowed"
                        }
                    })} placeholder='Enter your email' />
                    <p className='error' >{errors.email?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Mobile No.</label>
                    <input id="phone" type="number" {...register('phone',{
                        validate:{
                            lengthdata:(data)=>data.toString().length == 10 || "mobile length should be of 10 digit"
                        }
                    })} placeholder='Enter your number' />
                    <p className='error' >{errors.phone?.message}</p>
                </div>
                <div className='fromGroup'>
                    <input type="submit" value="Save" />
                </div>
            </form>
            <DevTool control={control}/>
        </div>
    </>
  )
}

export default CustomValidation