import { useForm, useFieldArray } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface userdata{
    name:string,
    email:string,
    anotherphone:{ number:string|number }[]
}

const Dynamic = () => {
    const myform = useForm<userdata>({
        defaultValues:{
            name:"",
            email:"",
            anotherphone:[{
                number:""
            }]
        }
    })
    const { register, handleSubmit, control, formState:{errors} } = myform
    const onSubmit : SubmitHandler<userdata> = (data) => console.log(data);
    // const { fields, append, remove } = useFieldArray({
    //     name:"anotherphone",
    //     control
    // })
    const myfieldarray = useFieldArray({
        name:"anotherphone",
        control
    })
    const { fields, append, remove } = myfieldarray
    console.log(myfieldarray);

  return (
    <div className="userFrom" >
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="fromGroup" >
                <label htmlFor="">Name :</label>
                <input type="text" {...register("name")} />
            </div>
            <div className="fromGroup" >
                <label htmlFor="">Email :</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                {
                    fields.map((field,index)=>{
                        return(
                            <div key={field.id} className="fromGroup" >
                                <input type="text" {...register(`anotherphone.${index}.number`)} />
                                { index>0 && <button className='rmoveBtn' type='button'onClick={()=>remove(index)} >remove field</button> }
                            </div>
                        )
                    })
                }
                <button className='addBtn' type='button'
                onClick={()=>append({number:""})}
                >Add one more field</button>
            </div>
            <div>
                <button type="submit" >submit</button>
            </div>
        </form>
        <DevTool control={control} />
    </div>
  )
}

export default Dynamic