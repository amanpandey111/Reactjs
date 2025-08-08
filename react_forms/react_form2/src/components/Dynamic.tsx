import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type Inputs = {
    name:string,
    email:string,
    // phone:number[]|string[],
    phone:(number|string)[],   //! array contain both number as well as string type
    address:{
        city:string,
        pincode:number|string
    },
    anotherphone: { number: string|number }[]
}
const Dynamic = () => {
    const form = useForm<Inputs>({
        defaultValues:{
            name:"",
            email:"",
            phone:[],
            address:{
                city:"",
                pincode:""
            },
            anotherphone:[{
                number:""
            }]
        }
    })
    const {register,control,handleSubmit,formState:{errors}} = form

    const { fields, append, remove } = useFieldArray({
        name:"anotherphone",
        control
    })

    // console.log("useFieldArray ",useFieldArray({
    //     name:"anotherphone",
    //     control
    // }));

    // console.log(register('aman pandey'));
    const formSubmit : SubmitHandler<Inputs> = (data) => {
        console.log("form Submit", data);
    }
  return (
    <>
        <div className='userFrom' style={{border:"2px solid red"}} >
            <h2>User Info Details</h2>
            {/* <h3>My Components Rerender - {componentRerender}</h3> */}
            <form action="#" className='userDetailForm' onSubmit={handleSubmit(formSubmit)} >
                <div className='fromGroup'>
                    <label htmlFor="name">Name</label>
                    <input autoComplete='true' type="text" id="name" {...register('name',{
                        required: {
                            value: true,
                            message: "Please Fill Your Good Name"
                        }
                    })} placeholder='Enter your name' />
                    <p>{errors.name?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor="name">Email</label>
                    <input autoComplete='true' id="email" type="email" {...register('email',{
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
                    <input autoComplete='true' id="phone" type="" {...register('phone.0')} placeholder='Enter your number' />
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Secondary Mobile No.</label>
                    <input autoComplete='true' id="phone" type="" {...register('phone.1')} placeholder='Enter your number' />
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>City</label>
                    <input autoComplete='true' id="phone" type="" {...register('address.city')} placeholder='Enter your number' />
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Pincode</label>
                    <input autoComplete='' id="phone" type="" {...register('address.pincode')} placeholder='Enter your number' />
                </div>
                <div>
                    {
                        fields.map((field,index)=>{
                            return(
                                <div key={field.id} className='fromGroup' >
                                    <input type="text" {...register(`anotherphone.${index}.number`)} />
                                    {index>0 && <button className='rmoveBtn' type='button' onClick={()=>remove(index)} >remove field</button>}
                                </div>
                            )
                        })
                    }
                    <button className='addBtn' type='button'
                    onClick={()=>append({number:""})}
                    >Add one more field</button>
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

export default Dynamic