import React, { useState, useContext } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import { useHistory } from "react-router-dom"
import AuthContext from "../Context/AuthContext"
import LoginSignupLinks from "../components/LoginSignupLinks"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [formErr, setFormErr] = useState({
    email: "",
    password: "",
  })

  let history = useHistory()
  const { login } = useContext(AuthContext)

  const validateForm = () => {
    if (!email || !email.includes("@")) {
      setFormErr({ email: "Email is invalid" })
      return false
    } else if (!password) {
      setFormErr({ password: "Password is invalid" })
      return false
    } else if (password !== confirmPassword) {
      setFormErr({ password: "Passwords don't match" })
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
          <div className='signup-container form_container otherAnim'>
            <Input
              setState={setEmail}
              value={email}
              className='input'
              name='email'
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
              name='password'
              type='password'
              placeholder='*****'
              inputId='password'
              labelName='Password'
            />
            <span style={{ color: "red" }}>{formErr.password}</span>
            <div className='slide-down'>
              <Input
                setState={setConfirmPassword}
                value={confirmPassword}
                className='input'
                name='confirm-password'
                type='password'
                placeholder='*****'
                inputId='comfirmPassword'
                labelName='Confirm Password'
              />
            </div>
          </div>
          <div className='btn_container'>
            <Button btnText='Submit' type='submit' className='actionBtn' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
