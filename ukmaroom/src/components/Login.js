import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <form>
        <label>
        username:
        <input type='text' name='username' />
        </label>
        {/* <label>
        email:
        <input type='email' name='email' />
        </label> */}
        <label>
        password:
        <input type='password' name='password' />
        </label>
        
       <button>Log In</button>

       <p> Forgotten password?</p>
       
       <Link to='/register'>
       <button>Create New Account</button>
       </Link>
       
      </form>
    </div>
  )
}

export default Login