import { useForm, useController, useFieldArray } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface userdetail{
    name:string,
    email:string,
    phone:number[],
    address:{
        city:string,
        pincode:number
    },
    anotherphone:[{
        number:""
    }]
    password:string
}

const ArrayField = () => {
    const myform = useForm<userdetail>()
    const{ control, handleSubmit } = myform

    // const { fields, append, remove } = useFieldArray({
    //     name:"anotherphone",
    //     control
    // })

    const { field:name, fieldState:namestate} = useController({
        name:"name",
        control,
        rules : {
            required:"name is required",
            minLength:{
                value:3,
                message:"Name Must Be atleast 3 charcters"
            }
        }
    })
    const { field:email, fieldState:emailstate} = useController({
        name:"email",
        control,
        rules:{
            required:"Email is required",
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Please enter a valid email address"
            },
            validate:{
                notAdmin:(value)=> value !== "admin@gmail.com" || "Enter a different email"
            }
        }
    })
    const {field:password, fieldState:passwordstate} = useController({
        name:"password",
        control,
        rules:{
            required:"Password is required",
            minLength:{
                value:8,
                message:"Password must be at least 8 characters long"
            }
        }
    })
    const {field:city, fieldState:citystate} = useController({
        name:"address.city",
        control,
        rules:{
            required:"City is required",
            minLength:{
                value:2,
                message:"City must be at least 2 characters long"
            }
        }
    })
    const {field:pincode, fieldState:pincodestate} = useController({
        name:"address.pincode",
        control,
        rules:{
            required:"City is required",
            minLength:{
                value:2,
                message:"City must be at least 2 characters long"
            }
        }
    })
    const {field:primaryphone, fieldState:primaryphonestate} = useController({
        name:"phone.0",
        control
    })
    const {field:secondaryphone, fieldState:secondaryphonestate} = useController({
        name:"phone.1",
        control
    })

    const onSubmit : SubmitHandler<userdetail> = (data) => console.log(data);
  return (
    <div className="userFrom"  style={{marginTop:"3rem"}} >
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="fromGroup" >
                <label htmlFor="">Name :</label>
                <input type="text" {...name} />
                <p className="error">{namestate.error?.message}</p>
            </div>
            <div className="fromGroup" >
                <label htmlFor="">Email :</label>
                <input type="text" {...email} />
                <p className="error">{emailstate.error?.message}</p>
            </div>
            <div className="fromGroup" >
                <label htmlFor="">primary phone :</label>
                <input type="text" {...primaryphone} />
            </div>
            <div className="fromGroup" >
                <label htmlFor="">Secondary phone :</label>
                <input type="text" {...secondaryphone} />
            </div>
             <div className="fromGroup" >
                <label htmlFor="">City :</label>
                <input type="text" {...city} />
                <p className="error">{emailstate.error?.message}</p>
            </div>
             <div className="fromGroup" >
                <label htmlFor="">Password :</label>
                <input type="text" {...pincode} />
                <p className="error">{emailstate.error?.message}</p>
            </div>
            {/* <div>
                {
                    fields.map((item,index)=>{
                        return(
                            <div key={item.id} className="fromGroup" >
                                <input type="text" {} />
                            </div>
                        )
                    })
                }
            </div> */}
            <div className="fromGroup" >
                <label htmlFor="">Password :</label>
                <input type="password" {...password} />
                <p className="error">{passwordstate.error?.message}</p>
            </div>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
     </div>
  )
}

export default ArrayField




// import { DevTool } from "@hookform/devtools";
// import { useForm, useController, useFieldArray } from "react-hook-form";
// import type { SubmitHandler } from "react-hook-form";

// interface userdetail {
//   name: string;
//   email: string;
//   phone: number[];
//   address: {
//     city: string;
//     pincode: number;
//   };
//   anotherphone: {
//     number: string;
//   }[];
//   password: string;
// }

// const ArrayField = () => {
//   const myform = useForm<userdetail>({
//     defaultValues: {
//       phone: [0, 0],
//       anotherphone: [{ number: "" }],
//     },
//   });

//   const { control, handleSubmit } = myform;

//   const { fields, append, remove } = useFieldArray({
//     name: "anotherphone",
//     control,
//   });

//   const { field: name, fieldState: namestate } = useController({
//     name: "name",
//     control,
//     rules: {
//       required: "Name is required",
//       minLength: {
//         value: 3,
//         message: "Name must be at least 3 characters",
//       },
//     },
//   });

//   const { field: email, fieldState: emailstate } = useController({
//     name: "email",
//     control,
//     rules: {
//       required: "Email is required",
//       pattern: {
//         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Please enter a valid email address",
//       },
//       validate: {
//         notAdmin: (value) =>
//           value !== "admin@gmail.com" || "Enter a different email",
//       },
//     },
//   });

//   const { field: password, fieldState: passwordstate } = useController({
//     name: "password",
//     control,
//     rules: {
//       required: "Password is required",
//       minLength: {
//         value: 8,
//         message: "Password must be at least 8 characters long",
//       },
//     },
//   });

//   const { field: city, fieldState: citystate } = useController({
//     name: "address.city",
//     control,
//     rules: {
//       required: "City is required",
//       minLength: {
//         value: 2,
//         message: "City must be at least 2 characters long",
//       },
//     },
//   });

//   const { field: pincode, fieldState: pincodestate } = useController({
//     name: "address.pincode",
//     control,
//     rules: {
//       required: "Pincode is required",
//       min: {
//         value: 100000,
//         message: "Enter a valid 6-digit pincode",
//       },
//     },
//   });

//   const { field: primaryphone } = useController({
//     name: "phone.0",
//     control,
//   });

//   const { field: secondaryphone } = useController({
//     name: "phone.1",
//     control,
//   });

//   const onSubmit: SubmitHandler<userdetail> = (data) => console.log(data);

//   return (
//     <div className="userForm" style={{ marginTop: "3rem" }}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="formGroup">
//           <label>Name:</label>
//           <input type="text" {...name} />
//           <p className="error">{namestate.error?.message}</p>
//         </div>

//         <div className="formGroup">
//           <label>Email:</label>
//           <input type="text" {...email} />
//           <p className="error">{emailstate.error?.message}</p>
//         </div>

//         <div className="formGroup">
//           <label>Primary Phone:</label>
//           <input type="text" {...primaryphone} />
//         </div>

//         <div className="formGroup">
//           <label>Secondary Phone:</label>
//           <input type="text" {...secondaryphone} />
//         </div>

//         <div className="formGroup">
//           <label>City:</label>
//           <input type="text" {...city} />
//           <p className="error">{citystate.error?.message}</p>
//         </div>

//         <div className="formGroup">
//           <label>Pincode:</label>
//           <input type="number" {...pincode} />
//           <p className="error">{pincodestate.error?.message}</p>
//         </div>

//         <div>
//           <label>Another Phone Numbers:</label>
//           {fields.map((item, index) => {
//             const {
//               field,
//               fieldState,
//             } = useController({
//               name: `anotherphone.${index}.number`,
//               control,
//               rules: {
//                 required: "Phone number is required",
//                 minLength: {
//                   value: 10,
//                   message: "Phone number must be at least 10 digits",
//                 },
//               },
//             });

//             return (
//               <div key={item.id} className="formGroup">
//                 <input type="text" {...field} placeholder={`Phone ${index + 1}`} />
//                 <p className="error">{fieldState.error?.message}</p>
//                 <button type="button" onClick={() => remove(index)}>
//                   Remove
//                 </button>
//               </div>
//             );
//           })}
//           <button
//             type="button"
//             onClick={() => append({ number: "" })}
//             style={{ marginTop: "0.5rem" }}
//           >
//             Add Phone
//           </button>
//         </div>

//         <div className="formGroup">
//           <label>Password:</label>
//           <input type="password" {...password} />
//           <p className="error">{passwordstate.error?.message}</p>
//         </div>

//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// };

// export default ArrayField;
