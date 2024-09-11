"use client"
import { useAppContext } from '@/app/ContextApi';
import React from 'react'
import Header from './Header';
import SearchBar from './SearchBar';
const ProjectsModal = () => {
  const {projectsModal:{openProjectsModal,setOpenProjectsModal}} = useAppContext();
  return (
    <div style={{display:openProjectsModal ? "block" : "none "}} className='flex flex-col gap-8 w-[70%] max-sm:w-[90%] p-9 border border-slate-50 h-[82%] bg-white rounded-xl shadow-md absolute z-50 left-1/2 -translate-x-1/2  top-16'>
      <Header />
      <SearchBar />
    </div>
  )
}

export default ProjectsModal