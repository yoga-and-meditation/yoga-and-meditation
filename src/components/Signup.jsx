/* import React from 'react'
 */import { useState } from 'react';
import {Link} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Signup() {
    const[email,setEmail]=useState('')
    const[password,setpassword]=useState('')
    const[error,seterror]=useState('')
    const {createUser}=UserAuth()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        seterror('')
        try{await createUser(email,password)}
        catch(e){
            seterror(e.message)
            console.log(e.message)
        }
    }

 return (
    <div>
      <div>
        <h1>Sign up for a free account</h1>
        <p>Already have an account ?<Link to='/signin'>Sign in</Link></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div><label>Email Address</label>
        <input onChange={(e)=>setEmail(e.target.value)}type='email'/></div>
        <div><label>Password</label>
        <input onChange={(e)=>setpassword(e.target.value)} type='password'/></div>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup