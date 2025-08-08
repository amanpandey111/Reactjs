import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface formdata{
  name: string;
  email: string;
  password: string | number;
}

// --- Nested Component ---
function MyTextInput() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="fromGroup" >
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        {...register("name", { required: "Name is required" })}
      />
      {/* {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>} */}
    </div>
  );
}

function MyPasswordInput() {
  const{register,formState:{errors}} = useFormContext();
  return(
    <div className="fromGroup">
      <label htmlFor="">Password</label>
      <input type="text"
      { ...register("password") }
      />
    </div>
  )
}

// --- Main Form Component ---
function MyFormContext() {
  const methods = useForm<formdata>({
    defaultValues: {
      name: "",
      email: ""
    }
  });

  const onSubmit : SubmitHandler<formdata> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...methods}> {/* Provide the form methods */}
      <div className='userFrom' style={{marginTop:"3rem"}} >
        {/* <h1>My Awesome Form</h1> */}
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <MyTextInput /> {/* This component consumes the context */}

          <div className="fromGroup" >
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              {...methods.register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {methods.formState.errors.email && (
              <p style={{ color: 'red' }}>{methods.formState.errors.email.message}</p>
            )}
          </div>
          <MyPasswordInput/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </FormProvider>
  );
}

export default MyFormContext;