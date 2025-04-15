import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

const [email, setEmail] = useState('')   
const [password, setPassword] = useState('') 

const submitHandler = (e)=> {
    e.preventDefault()
    handleLogin(email,password)
    console.log("Email is " , email)
    console.log("Paswword is ", password)
    setPassword('')
    setEmail('')

}

  return (
    <div className='flex items-center h-screen w-screen justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form 
        onSubmit={(e)=>{submitHandler(e)}}
        className='flex flex-col items-center justify-center'>
           
            <input 
            autoComplete='email'
            id='email'
            required 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className='border-2 border-emerald-600 rounded-full text-xl  outline-none bg-transparent py-3 px-5 placeholder:text-gray-400' 
            type='email' 
            placeholder='Enter your Email'/>

            <input 
            autoComplete='password'
            id='pass'
            required 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className='border-2 border-emerald-600 rounded-full text-xl  outline-none bg-transparent py-3 px-5 mt-3 placeholder:text-gray-400' 
            type='password' 
            placeholder='Enter your Password'/>

            <button 
            onSubmit={(e)=>{submitHandeler(e)}} 
            className='mt-5 bg-emerald-600 rounded-full text-white text-xl outline-none py-3 px-28 placeholder:text-white'
            >Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
