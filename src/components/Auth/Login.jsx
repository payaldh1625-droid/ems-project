import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
const [email, setEmail] = useState('')
const [password, setpassword] = useState('')

const submitHandler = (e)=>{
    e.preventDefault()
  handleLogin(email,password)
 setEmail("")
 setpassword("") 
}

return (
    <div className='bg-black h-screen w-screen flex justify-center items-center text-white'>
       <div className='border-2 border-emerald-600 p-18 rounded-xl'>
        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
         className='flex flex-col justify-center items-center'>
            <input
            value={email}
            onChange={(e)=>{
           setEmail(e.target.value)
            }}
             required className='border-2 border-emerald-600 rounded-full px-6 py-2 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
            <input
            value={password}
             onChange={(e)=>{
                setpassword(e.target.value)
             }}
            required  className='border-2 border-emerald-600 rounded-full mt-8 px-6 py-2 text-xl outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your Password' />
            <button className='px-28 py-2 mt-10 text-xl text-white rounded-full border-none bg-emerald-600 '>Login</button>
        </form>
    
        </div> 







    </div>
  )
}

export default Login