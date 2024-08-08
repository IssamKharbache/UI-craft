import React from 'react'

interface ButtonProps {
 label:string
}
const Button = ({label}:ButtonProps) => {
  return (
    <button className='py-2 px-4 bg-primary hover:bg-primary-hover transition rounded text-white font-bold'>
      {label}
    </button>
  )
}

export default Button