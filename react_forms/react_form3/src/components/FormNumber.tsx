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
    anotherphone: { number: string|number }[],
    age:number,dob:Date
}
const FormNumber = () => {
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
            }],
            age:0,
            dob:new Date()
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
            <h2 style={{textAlign:"center",padding:"0px 0px 20px 0px"}} >User Info Details</h2>
            {/* <h3>My Components Rerender - {componentRerender}</h3> */}
            <form action="#" className='userDetailForm' onSubmit={handleSubmit(formSubmit)} >
                <div className='fromGroup'>
                    <label htmlFor="name">Name</label>
                    <input autoComplete='true' type="text" id="name" {...register('name',{
                        required: {
                            value: true,
                            message: "Please Fill Your Good Name"
                        },
                        minLength:{
                            value:4,
                            message:"Your Name should contain at least of 4 characters"
                        }
                    })} placeholder='Enter your name' />
                    <p className='error' >{errors.name?.message}</p>
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
                    <input autoComplete='true' id="phone" type="" {...register('phone.0',{valueAsNumber:true})} placeholder='Enter your number' />
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
                    <label htmlFor="age">Age</label>
                    <input autoComplete='true' type="number" id="age" {...register('age',{
                        valueAsNumber:true,
                        required: {
                            value: true,
                            message: "Let us know your age"
                        },
                        min:{
                            value:20,
                            message:"Your Age Must be Greater than 20"
                        },
                        max:{
                            value:70,
                            message:"Your Age Must be Less than 70"
                        }
                    })} placeholder='Enter your age' />
                    <p className='error' >{errors.age?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor="dob">Date of Birth</label>
                    <input autoComplete='true' type="date" id="dob" {...register('dob',{
                        valueAsDate:true,
                        required: {
                            value: true,
                            message: "Let us know your age"
                        }
                    })} placeholder='Enter your Date Of Birth' />
                    {/* <p>{errors.name?.message}</p> */}
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

export default FormNumber