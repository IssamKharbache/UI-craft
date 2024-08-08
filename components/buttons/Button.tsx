import React from 'react'

interface ButtonProps {
 label:string;
 type:"submit" | "reset" | "button";
}
const Button = ({label,type}:ButtonProps) => {
  return (
    <button type={type} className='py-2 px-4 bg-primary hover:bg-primary-hover transition rounded text-white font-bold'>
      {label}
    </button>
  )
}

export default Button