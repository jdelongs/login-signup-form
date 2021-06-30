import React, { useState } from "react"

import LogOutButton from "../components/LogOutButton"
import Input from "../components/Input"
import Button from "../components/Button"
const Profile = () => {
  const [email, setEmail] = useState("")
  const [inputErr, setInputErr] = useState("")
  const sendForgotPasswordEmail = () => {
    if (email && email.includes("@")) {
      alert(`if your account matches ${email} you will recieve an email`)
    } else if (!email || !email.includes("@")) {
      setInputErr("Invalid Email")
      return null
    }
  }
  return (
    <div className='profile_container'>
      <div className='profile_content'>
        <h3>Hello!</h3>
        <Input
          setState={setEmail}
          value={email}
          className='profile_input'
          type='text'
          placeholder='Account Email'
          labelName='email'
          inputId='email'
        />
        <span style={{ color: "red", marginBottom: "2rem" }}>{inputErr}</span>
        <div onClick={sendForgotPasswordEmail}>
          <Button btnText='Reset password' className='whiteBtn' />
        </div>
        <LogOutButton>Logout</LogOutButton>
      </div>
    </div>
  )
}

export default Profile
