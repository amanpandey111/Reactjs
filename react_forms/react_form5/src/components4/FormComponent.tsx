import { useForm, useWatch } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

interface formdata{
    name:string,
    email:string
}

const FormComponent = () => {
  const { register, control, handleSubmit, formState:{errors} } = useForm<formdata>();

  // Using useWatch to observe the value of a specific field
  const watchedValue = useWatch({
    control,          // control is needed to bind to the form state
    name: "email",    // specific field to watch
    defaultValue: ""  // optional default value
  });

  const onSubmit : SubmitHandler<formdata> = (data) => {
    console.log(data);
  };

  return (
    <div className='userFrom' style={{marginTop:"3rem"}} >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='fromGroup' >
                <label>Name:</label>
                <input
                {...register("name", { required: "Name is required" })}
                type="text"
                />
            </div>
            <div className='fromGroup' >
                <label htmlFor="">Email:</label>
                <input type="text" {...register("email",{
                    required:"Email is Mandatory"
                })} />
                <p className='error' >{errors.email?.message}</p>
            </div>

            <div className='fromGroup'>
                <p>Watched Name: {watchedValue}</p>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default FormComponent;