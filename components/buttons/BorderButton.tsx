import React from 'react'

type ButtonProps =  {
  label:string
 }

const BorderButton = ({label}:ButtonProps) => {
  return (
    <button className='py-2 px-4 border border-primary hover:bg-primary-hover transition rounded text-primary hover:text-white font-bold'>
      {label}
    </button>
  )
}

export default BorderButton