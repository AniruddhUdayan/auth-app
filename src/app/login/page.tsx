"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';
import { Axios } from 'axios';

const LoginPage = () => {
  const [user,setUser] = useState({
    email:"",
    password:"",
  })
  const onSignup = async() => {}
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Login</h1>
      <hr />
      <label htmlFor='email'>email</label>
      <input
      className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600' 
      id='username'
      type='text'
      value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}
      placeholder='email'></input>
      <label htmlFor='password'>password</label>
      <input
      className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600' 
      id='username'
      type='text'
      value={user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      placeholder='password'></input>
      <button onClick={onSignup} className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>Login here</button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  )
}

export default LoginPage;
