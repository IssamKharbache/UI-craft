import React from 'react'
import Button from '../buttons/Button'
import BorderButton from '../buttons/BorderButton'
import Link from 'next/link'

const AuthButtons = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link href="/sign-in"><Button  label='Sign in' /></Link>
      <Link href="/sign-up"><BorderButton label='Register' /></Link>
    </div>
  )
}

export default AuthButtons