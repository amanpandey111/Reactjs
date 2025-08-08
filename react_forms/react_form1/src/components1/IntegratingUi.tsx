import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
// import { Input } from "@material-ui/core"
import Input from "@mui/material/Input";

interface IFormInput {
  firstName: string
  lastName: string
  iceCreamType: { label: string; value: string }
  email:string
}

const IntegratingUi = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      iceCreamType: { label:"",value:"" },
      email:"",
    //   iceCreamType: null,
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => <Input {...field} />}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field }) => <Input {...field} />}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => <Input {...field} />}
      />
      <Controller
        control={control}
        name="iceCreamType"
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  )
}

export default IntegratingUi



// ...existing code...
// interface IFormInput {
//   firstName: string
//   lastName: string
//   iceCreamType: { label: string; value: string } | null
// }

// const IntegratingUi = () => {
//   const { control, handleSubmit } = useForm<IFormInput>({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       iceCreamType: null,
//     },
//   })

//   const onSubmit: SubmitHandler<IFormInput> = (data) => {
//     console.log(data)
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="firstName"
//         control={control}
//         render={({ field }) => <Input {...field} />}
//       />
//       <Controller
//         name="lastName"
//         control={control}
//         render={({ field }) => <Input {...field} />}
//       />
//       <Controller
//         name="iceCreamType"
//         control={control}
//         render={({ field }) => (
//           <Select
//             {...field}
//             value={field.value}
//             onChange={field.onChange}
//             options={[
//               { value: "chocolate", label: "Chocolate" },
//               { value: "strawberry", label: "Strawberry" },
//               { value: "vanilla", label: "Vanilla" },
//             ]}
//           />
//         )}
//       />
//       <input type="submit" />
//     </form>
//   )
// }
// ...existing code...