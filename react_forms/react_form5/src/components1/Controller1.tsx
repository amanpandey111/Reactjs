import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

interface formdata{
    username:string;
    email:string
}

const Controller1 = () => {
  const { control, handleSubmit } = useForm<formdata>();

  const onSubmit : SubmitHandler<formdata> = data => {
    console.log(data);
  };

  return (
    <div className="userFrom" style={{marginTop:"3rem"}} >
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                    required: "Username is required",
                    minLength:{
                        value:3,
                        message:"Username must be at least 3 characters long"
                    } 
                }}
                render={({ field, fieldState }) => (
                <div className="fromGroup" >
                    <label>Username:</label>
                    <input {...field} />
                    {fieldState?.error && <p>{fieldState.error.message}</p>}
                </div>
                )}
            />
            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "Username is required" }}
                render={({ field, fieldState }) => (
                <div className="fromGroup" >
                    <label>Email:</label>
                    <input {...field} />
                    {fieldState?.error && <p>{fieldState.error.message}</p>}
                </div>
                )}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

interface formdata{
    username:string;
}

export default Controller1;
