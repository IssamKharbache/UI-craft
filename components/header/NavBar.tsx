import React from 'react'
import Logo from '../rootComp/Logo'
import AuthButtons from './AuthButtons'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between shadow-md    max-sm:flex-col mx-8 h-20 '>
      <Logo  />
      <AuthButtons />
    </nav>
  )
}

export default NavBar