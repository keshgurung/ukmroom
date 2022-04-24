import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <div>
      <h1>UKMAROOM</h1>
      <Link to= {'/register'}>Register</Link>
      <Link to= {'/login'}>Login</Link>

    </div>
  )
}

export default Header