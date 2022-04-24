import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Welcome to UKMAROOM.. Register here to view rooms or add rooms!!!</h2>
      <form>
        <label>
        username:
        <input type='text' name='username' />
        </label>
        <label>
        email:
        <input type='email' name='email' />
        </label>
        <label>
        phone:
        <input type='tel' id='phone' name='phone' placeholder='07-123456789' />
        </label>
        <label>
        password:
        <input type='password' name='password' />
        </label>
        <label>
        password confirmation:
        <input type='password' name='passwordconfirmation' />
        </label>
        
        <input type='submit' name='Submit' />
       
      </form>
    </div>
  )
}

export default Register