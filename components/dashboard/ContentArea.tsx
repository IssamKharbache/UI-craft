"use client";
import React from 'react'
import Cards from './main/Cards'
import AllProjects from './main/AllProjects'
import FavoriteComponents from './main/FavoriteComponents'
import { useAppContext } from '@/app/ContextApi';

const ContentArea = () => {
    const {addProjectModelObject:{addModelOpen}} = useAppContext()
  return (
    <div className='w-full bg-slate-50 md:p-8'>
    <Cards />
    <AllProjects />
    <FavoriteComponents />
    {addModelOpen && <SoftLayer />}
  </div>
  )
}

export default ContentArea

export const SoftLayer = () =>{
    return (
      <div className="w-full h-full fixed top-0 right-0 bg-black opacity-50"></div>
    )
  }