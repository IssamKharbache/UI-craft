"use client";
import { useAppContext } from '@/app/ContextApi';
import React from 'react'

const ComponentPage = () => {
  const {showComponentPageObject:{setShowComponentPage,showComponentPage}} = useAppContext();
  return (
    <div className='flex gap-4 w-full h-[calc(100vh-64px)]  bg-slate-50'>
        <span>Component page</span>
        <span className='cursor-pointer ' onClick={() => setShowComponentPage(false)}>Back</span>
    </div>
  )
}

export default ComponentPage