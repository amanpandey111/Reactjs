import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import type { SubmitHandler } from "react-hook-form"

interface formdata{
    name:string,
    email:string,
    phone:number
}


const MyForm1 = () => {
    const myform = useForm<formdata>()
    const { register, handleSubmit } = myform
    // console.log(myform);
    const onSubmit : SubmitHandler<formdata> = (data)=> console.log(data);
  return (
    <>
       <div className='userFrom'>
            <h2>User Info Details</h2>
            <form action="#" className='userDetailForm' onSubmit={handleSubmit(onSubmit)} >
                <div className='fromGroup'>
                    <label htmlFor="name">Name</label>
                    <input autoComplete='off' type="text" id="name" placeholder='Enter your name' {...register("name")} />
                </div>
                <div className='fromGroup'>
                    <label htmlFor="email">Email</label>
                    <input autoComplete='off' id="email" type="email" placeholder='Enter your email' {...register("email")} />
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Mobile No.</label>
                    <input autoComplete='off' id="phone" type="number" placeholder='Enter your number' {...register("phone")} />
                </div>
                <div className='fromGroup'>
                    <input type="submit" value="Save" />
                </div>
                {/* <DevTool control={} /> */}
            </form>
        </div>
    </>
  )
}

export default MyForm1