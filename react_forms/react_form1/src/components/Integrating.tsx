import React from "react"
import { useForm } from "react-hook-form"
import type { Path, UseFormRegister, SubmitHandler } from "react-hook-form"

interface IFormValues {
  "First Name": string
  Age: number
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
}

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
    </select>
  </>
))

const Integrating = () => {
  const { register, handleSubmit } = useForm<IFormValues>()
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // alert(JSON.stringify(data))
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto" }}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  )
}
export default Integrating