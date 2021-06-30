import React from "react"

const Button = ({ btnText, className, type, onClick }) => {
  return (
    <button onClick={onClick || undefined} type={type} className={className}>
      {btnText}
    </button>
  )
}

export default Button
