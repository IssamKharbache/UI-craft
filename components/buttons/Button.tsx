import React from 'react'

interface ButtonProps {
 label:string;
 type?:"submit" | "reset" | "button";
 onClick?:()=>void;
}
const Button = ({label,type,onClick}:ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className='py-2 px-4 bg-primary hover:bg-primary-hover transition rounded text-white font-bold'>
      {label}
    </button>
  )
}

export default Button