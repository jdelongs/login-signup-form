import React, { useState, useContext } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import { useHistory } from "react-router-dom"
import AuthContext from "../Context/AuthContenxt"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formErr, setFormErr] = useState("")
  const { login } = useContext(AuthContext)
  const history = useHistory()
  const validateForm = () => {
    if (!email || !email.includes("@") || !password) {
      setFormErr("Email Or Password Is Incorrect")
      return false
    }
    return true
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      history.push("/profile")
      login()
    }
  }
  return (
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
        <span style={{ color: "red" }}>{formErr}</span>
      </div>
      <div className='btn_container'>
        <Button btnText='Submit' className='actionBtn' />
      </div>
    </form>
  )
}

export default Login
