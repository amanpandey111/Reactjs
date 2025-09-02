import { useState } from "react";


const Login = (props) => {
    const { handleLogin } = props

    const[email, setEmail] = useState('')
    const[password, setpassword] = useState('')

    function submitHandler(e){
        e.preventDefault()
        handleLogin(email,password)
        setEmail("");setpassword("")
        // window.location.reload()
    }

  return (
    <div className='h-screen w-screen flex items-center justify-center' >
        <div className='border-2 border-emerald-600 p-20 rounded-xl' >
            <form
            onSubmit={submitHandler}
            className='flex flex-col items-center justify-center' >
                <input value={email} 
                required
                className='border-2 border-emerald-600 rounded-md outline-none p-2 placeholder:text-gray-400' type="email" placeholder='Enter Your Email' autoComplete='off'
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input value={password}
                onChange={(e)=>setpassword(e.target.value)}
                required className='mt-3 border-2 border-emerald-600 rounded-md outline-none p-2 placeholder:text-gray-400' type="password" placeholder='Enter Your Password' />
                <button className='w-full font-bold mt-3 border-2 bg-emerald-400 rounded-full outline-none px-4 py-1.5 text-white border-none cursor-pointer' >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login