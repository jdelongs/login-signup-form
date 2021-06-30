import React from "react"

const Button = ({ btnText, className }) => {
  return (
    <button type='submit' className={className}>
      {btnText}
    </button>
  )
}

export default Button
