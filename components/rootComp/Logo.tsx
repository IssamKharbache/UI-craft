import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src="/uilogo.png" alt='logo' width={110} height={88} />
    </div>
  )
}

export default Logo