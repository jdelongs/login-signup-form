import React from "react"
const Input = ({
  setState,
  className,
  type,
  placeholder,
  labelName,
  inputId,
  value,
}) => {
  const onChange = (e) => {
    setState(e.target.value)
  }
  return (
    <>
      <label htmlFor={inputId}>{labelName}</label>
      <input
        className={className}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        id={inputId}
      />
    </>
  )
}

export default Input
