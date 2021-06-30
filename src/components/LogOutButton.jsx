import React, { useContext } from "react"
import AuthContext from "../Context/AuthContenxt"
const LogOutButton = () => {
  const { logout } = useContext(AuthContext)
  const onClick = () => {
    logout()
  }
  return (
    <button onClick={onClick} type='button' className='actionBtn'>
      Logout
    </button>
  )
}

export default LogOutButton
