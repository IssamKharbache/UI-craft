import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/uilogo.png" alt='logo' width={110} height={88} />
    </Link>
  )
}

export default Logo