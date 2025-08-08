// import './App.css'
// import { useForm } from "react-hook-form"
// import type { SubmitHandler } from 'react-hook-form';

// type Inputs = {
//   example: string
//   exampleRequired: string
//   name:string
// }

// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<Inputs>()

//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

//   console.log(watch("example")) // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input {...register("name", { required: true })} />
//       {errors.name && <span>name is required</span>}

//       <input type="submit" />
//     </form>
//   )
// }

// export default App


import './App.css'
import Integratin1 from './components/Integratin1'
import Integrating from './components/Integrating'
import MyForm1 from './components/MyForm1'
import MyForm2 from './components/MyForm2'
import MyForm3 from './components/MyForm3'
import IntegratingUi from './components1/IntegratingUi'

function App() {

  return (
    <>
      <MyForm1/>
      {/* <MyForm2/> */}
      {/* <MyForm3/> */}

      {/* <Integrating/> */}
      {/* <Integratin1/> */}

      {/* <IntegratingUi/> */}
    </>
  )
}

export default App
