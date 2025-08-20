import { useForm, useController } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

interface example{
    exampleField:string
}
  // const { field, fieldState } = useController({
  //   name: "exampleField", // Field name
  //   control,              // The control object passed from useForm
  //   rules: { required: "This field is required" } // Validation rules
  // });

function UseControl() {
  const { control, handleSubmit } = useForm<example>();

  const { field, fieldState } = useController({
    name: "exampleField", // Field name
    control,              // The control object passed from useForm
    rules: { required: "This field is required" } // Validation rules
  });

  const onSubmit : SubmitHandler<example> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Example Field</label>
        <input {...field} />
        {fieldState?.error && <p>{fieldState.error.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UseControl;
