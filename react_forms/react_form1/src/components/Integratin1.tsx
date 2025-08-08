import { Label } from "@mui/icons-material"
import React from "react"
import { useForm } from "react-hook-form"
import type { Path, UseFormRegister, SubmitHandler } from "react-hook-form"

interface Iformvalues{
    "firstname":string,
    "lastname":string
    "age":number
}

type Inputprops = {
    label:Path<Iformvalues>,
    register:UseFormRegister<Iformvalues>,
    required?:boolean
}

const FirstName = ({label, register, required}:Inputprops) => (
    <>
      <label>{label}</label>
      <input {...register(label,{required})} />
    </>
)
const LastName = ({label,register,required}:Inputprops) => (
    <>
      <label>{label}</label>
      <input {...register(label,{required})} />
    </>
)
// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<Iformvalues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
))

const Integratin1 = () => {
    const { register, handleSubmit } = useForm<Iformvalues>()
    const onSubmit : SubmitHandler<Iformvalues> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <FirstName label="firstname" register={register} required />
        <LastName label="lastname" register={register} />
        <Select label="age" {...register("age")} />
        <button type="submit" >submit</button>
    </form>
  )
}

export default Integratin1