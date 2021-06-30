import React from "react"
import { NavLink } from "react-router-dom"
const LoginSignupLinks = () => {
  return (
    <ul className='login-signup_list'>
      <li className='login-signup_list-item'>
        <NavLink
          activeStyle={{
            background: "#fbe9e5",
            border: "2px solid #ffe0d9",
            padding: "1.4rem 4.9rem",
          }}
          className='login-signup_list-link'
          to='/login'
        >
          Login
        </NavLink>
      </li>
      <li className='login-signup_list-item'>
        <NavLink
          activeStyle={{
            background: "#fbe9e5",
            border: "2px solid #ffe0d9",
            padding: "1.4rem 4.9rem",
          }}
          className='login-signup_list-link'
          to='/signup'
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  )
}

export default LoginSignupLinks
