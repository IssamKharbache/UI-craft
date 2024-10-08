"use client";

import { useSession } from "next-auth/react";

const WelcomeMessage = () => {
    const {data:session} = useSession();
  
    
  return (
    <div className="hidden md:flex gap-2 text-lg items-center">
    <span>Welcome,</span>
      <h1 className=' font-bold capitalize text-red-400'>{session?.user?.name}</h1>
  </div>
  )
}

export default WelcomeMessage