import { useForm } from "react-hook-form"

const LearnForTask = () => {
    const {formState} = useForm()
    console.log(formState);
  return (
    <div>LearnForTask</div>
  )
}

export default LearnForTask