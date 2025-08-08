import { useForm } from "react-hook-form"
import type  { SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface formdata {
    name: string,
    email: string,
    phone: number[],
    address:{
        city: string,
        pincode: number | string
    }
}

const UserinfoArray = () => {
    const myform = useForm<formdata>({
        defaultValues: async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users/7")
            const data = await res.json()
            return{
                name:data.name,
                email:data.email,
                phone:[],
                address:{
                    city:data.address.city,
                    pincode:data.address.zipcode
                }
            }
        }
    })
    const { control, register, handleSubmit, formState:{errors} } = myform
    const formsubmit : SubmitHandler<formdata> = (data) => console.log(data);
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
                        },
                        minLength:{
                            value:4,
                            message:"Name should be greate tha length 4"
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
                        },
                        validate:{
                            specificDomain: (value) => value.endsWith("com") || "We Only accept .com Domain"
                        }
                    })} />
                    <p className="error" >{errors.email?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Mobile No.</label>
                    <input autoComplete='off' id="phone" type="number" placeholder='Enter your number' {...register("phone.0",{
                        required:{
                            value:true,
                            message:"Phone Number is required"
                        },
                        valueAsNumber:true,
                        validate:{
                            lengthdigit:(value)=>value.toString().length === 10 || "Length of Phone Number should be 10 digits"
                        }
                    })} />
                    <p className="error" >{errors.phone?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Secondary mobile </label>
                    <input autoComplete='off' id="phone" type="number" placeholder='Enter your number' {...register("phone.1",{
                        required:{
                            value:true,
                            message:"Phone Number is required"
                        },
                        valueAsNumber:true,
                        validate:{
                            lengthdigit:(value)=>value.toString().length === 10 || "Length of Phone Number should be 10 digits"
                        }
                    })} />
                    <p className="error" >{errors.phone?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor='city'>City</label>
                    <input autoComplete='off' id="city" type="string" placeholder='Enter your City' {...register("address.city")} />
                    {/* <p className="error" >{errors.phone?.message}</p> */}
                </div>
                <div className='fromGroup'>
                    <label htmlFor='pincode'>Pincode</label>
                    <input autoComplete='off' id="pincode" type="text" placeholder='Enter your Pincode' {...register("address.pincode")} />
                    {/* <p className="error" >{errors.phone?.message}</p> */}
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

export default UserinfoArray