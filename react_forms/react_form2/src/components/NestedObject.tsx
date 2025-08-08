import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type Inputs = {
    name:string,
    email:string,
    phone:number,
    address:{
        city:string,
        pincode:number
    }
}
const NestedObject = () => {
    const form = useForm<Inputs>({
        defaultValues:async () => {
            const response = await fetch("https://dummyjson.com/users/10")
            const data = await response.json()
            return{
                name:data.firstName,
                email:data.email,
                phone:data.phone,
                address:{
                    city:data.address.city,
                    pincode:data.address.postalCode
                }
            }
        }

        // defaultValues: userdata

        // defaultValues:{
        //     name:"Shivam Tripathi"
        // }
    })
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
                        }
                    })} placeholder='Enter your name' />
                    <p>{errors.name?.message}</p>
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
                        }
                    })} placeholder='Enter your email' />
                    <p className='error' >{errors.email?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Mobile No.</label>
                    <input id="phone" type="" {...register('phone')} placeholder='Enter your number' />
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>City</label>
                    <input id="phone" type="" {...register('address.city')} placeholder='Enter your number' />
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Pincode</label>
                    <input id="phone" type="" {...register('address.pincode')} placeholder='Enter your number' />
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

export default NestedObject