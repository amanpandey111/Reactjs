import { useEffect, useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

let componentRender = 0

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
    age:number,dob:any
}
const DisableField = () => {
    componentRender++
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
    const {register,control,watch,setValue,getValues,handleSubmit,formState:{errors,touchedFields,dirtyFields,isDirty}} = form
    const { fields, append, remove } = useFieldArray({
        name:"anotherphone",
        control
    })

    // console.log({touchedFields, dirtyFields, isDirty});
    // console.log();

    // console.log("useFieldArray ",useFieldArray({
    //     name:"anotherphone",
    //     control
    // }));

    // const userWatch = watch("name")      //! If I want to watch single field
    // const userWatch = watch()      //! If I want to watch multiple field
    // console.log(userWatch);
    // Using useMemo to avoid unnecessary re-renders
    const userWatch = useMemo(() => watch(), [watch]);

    const formSubmit : SubmitHandler<Inputs> = (data) => {
        console.log("form Submit", data);
    }

    // useEffect(()=>{
    //     let subscription = watch((data)=>console.log(data))
    //     return ()=> subscription.unsubscribe()
    // },[userWatch])

    // const handleGetValues = () = handleGetValues()
    const handleGetValues = () => {
        const formvalue = getValues(["name","email","phone","address","anotherphone","age"]);
        console.log(formvalue);
    }
    const handleSetValues = () => {
        console.log("Let's Set Values");
        setValue("name","vaibhav pandey",{shouldValidate:false,shouldDirty:true,shouldTouch:true})
        setValue("email","")
    }
    const onError = (error:any) => {
        console.log("error",error);
    }
  return (
    <>
        <div className='userFrom'>
            <h2 style={{textAlign:"center"}} >User Info Details(Get Values)</h2>
            <h3 style={{textAlign:"center",lineHeight:"2rem"}}>component renders : {componentRender}</h3>
            {/* <h3>My Components Rerender - {componentRerender}</h3> */}
            <form action="#" className='userDetailForm' onSubmit={handleSubmit(formSubmit, onError)} >
                <div className='fromGroup'>
                    <label htmlFor="name">Name</label>
                    <input autoComplete='true' type="text" id="name" {...register('name',{
                        // disabled:true,
                        disabled:watch("email") == "" ,
                        required: {
                            value: true,
                            message: "Please Fill Your Good Name"
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
                    <input disabled={!isDirty} type="submit" value="Save" />
                    <button type='button' onClick={handleGetValues} >GetValues</button>
                    <button type='button' onClick={handleSetValues} >SetValues</button>
                </div>
            </form>
            <DevTool control={control}/>
        </div>
    </>
  )
}

export default DisableField