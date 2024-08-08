import React from 'react'
import Logo from '../rootComp/Logo'
import AuthButtons from './AuthButtons'

const NavBar = () => {
  return (
    <div className="bg-red-100 ">
         <nav className='flex items-center justify-between  max-sm:flex-col mx-8 h-20  px-6'>
      <Logo  />
      <AuthButtons />
    </nav>
    </div>
 
  )
}

export default NavBar