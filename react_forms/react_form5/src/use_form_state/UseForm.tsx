import { useForm, useFormState } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface formdata{
  name:string,
  email:string
}

const UseForm = () => {
  const { register, handleSubmit, control } = useForm<formdata>();

  // Access form state
  const { errors, isDirty, isValid, isSubmitting, submitCount } = useFormState({
    control
  });

  // console.log(isDirty);
  console.log("isSubmitting", isSubmitting, "isValid",isValid );

  const onSubmit : SubmitHandler<formdata> = (data) => {
    console.log(data);
  };

  return (
    <div className='userFrom' style={{marginTop:"3rem"}} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='fromGroup' >
          <label>Name:</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className='fromGroup' >
          <label>Email:</label>
          <input
            // type="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button type="submit" disabled={!isValid || isSubmitting}>
          Submit
        </button>
      </form>
      <DevTool control={control} />

      <div className='fromGroup' >
        <p>Is the form dirty? {isDirty ? 'Yes' : 'No'}</p>
        <p>Is the form valid? {isValid ? 'Yes' : 'No'}</p>
        <p>Is form submitting? {isSubmitting ? 'Yes' : 'No'}</p>
        <p>Form errors: {JSON.stringify(errors)}</p>
        <p>Submit Count : {submitCount} </p>
      </div>
    </div>
  );
};

export default UseForm;