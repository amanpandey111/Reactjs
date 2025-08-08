import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type Inputs = {
    name:string,
    email:string,
    phone:number
}
const MyForm1 = () => {
    const form = useForm<Inputs>()
    const {register,control,handleSubmit} = form
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
                    <input autoComplete='off' type="text" id="name" {...register('name')} placeholder='Enter your name' />
                </div>
                <div className='fromGroup'>
                    <label htmlFor="email">Email</label>
                    <input autoComplete='off' id="email" type="email" {...register('email')} placeholder='Enter your email' />
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Mobile No.</label>
                    <input autoComplete='off' id="phone" type="number" {...register('phone')} placeholder='Enter your number' />
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

export default MyForm1