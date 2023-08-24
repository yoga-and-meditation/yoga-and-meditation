/* import React from 'react';
 */import {Link} from 'react-router-dom';
function Signin() {
  return (
    <div>  <h1>Sign in your account</h1>
    <p>Dont have an account yet?<Link to='/signup'>sign up.</Link></p>  <form action="">
        <div><label>Email Address</label>
        <input type='email'/></div>
        <div><label>Password</label>
        <input type='password'/></div>
        <button>Sign In</button>
      </form></div>
  )
}

export default Signin