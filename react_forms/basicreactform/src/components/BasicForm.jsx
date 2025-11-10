import { useForm } from 'react-hook-form'
import './basicform.css'

function BasicForm(){
  const myForm = useForm()
  const myForm1 = useForm()
  console.log(myForm)
  const { register, handleSubmit } = myForm
  const { register: register1, handleSubmit: handleSubmit1 } = myForm1

  function handleSubmitForm(data){
    console.log(data);
  }

  function handleSubmitForm1(data){
    console.log(data)
  }

  return(
    <div className='formdiv' >
      <h1>Let's Build The Basic Form</h1> <br /><br /><br />
      <div>
        <h2>This is the second Form in the same React hook form</h2>
        <form action="" onSubmit={handleSubmit(handleSubmitForm)} >
          <input type="text" placeholder='Enter Your First Name'{ ...register("firstname") } />
          <input type="text" placeholder='Enter Your Second Name' { ...register("lastname") } />
          <input type="text" placeholder='Enter Your Gmail' { ...register("email") } />
          <input type="text" placeholder='Enter Your PassWord' { ...register("password") } />
          <input type="text" placeholder='Re-Enter Your PassWord' { ...register("repassword") } />
          <button type='submit' >Submit</button>
        </form>
      </div>
      <br /><br />
      <div>
        <h2>This is the second Form in the same React hook form</h2>
        <form onSubmit={handleSubmit1(handleSubmitForm1)} >
          <input type="text" placeholder='Enter Your Company Name' { ...register1("companyname") } />
          <input type="text" placeholder='Enter Your College Name' { ...register1("collegename") } />
          <input type="text" placeholder='Enter Your Inter College name' { ...register1("intercollege") } />
          <input type="text" placeholder='Enter Your School Name' { ...register1("schoolname") } />
          <button type='submit' >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BasicForm;
