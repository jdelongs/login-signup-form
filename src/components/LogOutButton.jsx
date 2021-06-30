import React, { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import { useHistory } from "react-router-dom"
const LogOutButton = () => {
  const { logout } = useContext(AuthContext)
  const history = useHistory()

  const onClick = () => {
    history.push("/login")
    logout()
  }
  return (
    <button onClick={onClick} type='button' className='actionBtn'>
      Logout
    </button>
  )
}

export default LogOutButton
