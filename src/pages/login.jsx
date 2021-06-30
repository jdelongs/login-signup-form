import React, { useState, useContext } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import { useHistory } from "react-router-dom"
import AuthContext from "../Context/AuthContext"
import LoginSignupLinks from "../components/LoginSignupLinks"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formErr, setFormErr] = useState({ email: "", password: "" })
  const history = useHistory()
  const { login } = useContext(AuthContext)
  const validateForm = () => {
    if (!email || !email.includes("@")) {
      setFormErr({ email: "Invalid Email" })
      return false
    } else if (!password) {
      setFormErr({ password: "Password can't be empty" })
      return false
    }
    return true
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      login()
      history.push("/profile")
    }
  }
  return (
    <div className='landing_container'>
      <div className='landing_content'>
        <LoginSignupLinks />
        <form onSubmit={onSubmit}>
          <div className='login_container form_container'>
            <Input
              setState={setEmail}
              value={email}
              className='input'
              name='Email'
              type='text'
              placeholder='email'
              inputId='email'
              labelName='Email'
            />
            <span style={{ color: "red" }}>{formErr.email}</span>
            <Input
              setState={setPassword}
              value={password}
              className='input'
              name='Password'
              type='password'
              placeholder='*****'
              inputId='password'
              labelName='Password'
            />
            <span style={{ color: "red" }}>{formErr.password}</span>
          </div>
          <div className='btn_container'>
            <Button btnText='Submit' type='submit' className='actionBtn' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
