import React from 'react'
//icons

import { GoProjectRoadmap } from "react-icons/go";
import { BiSolidCategory } from "react-icons/bi";
import { IoHeartSharp } from "react-icons/io5";
import { useAppContext } from '@/app/ContextApi';


const Cards = () => {
    const {allProjectsObject:{allProjects},favoritesComponentObject:{allFavoriteComponents}} = useAppContext();
const data = [
    {
        name:"Projects created",
        icon :<GoProjectRoadmap size={25} className='text-red-400'/>,
        number:allProjects.length
    },
    {
        name:"Components added",
        icon :<BiSolidCategory size={25} className='text-red-400'/>,
        number:allProjects.map(project=>project.components.length).reduce((a,b)=>a+b,0)
    },
    {
        name:"Favorites components",
        icon :<IoHeartSharp size={25} className='text-red-400' />,
        number:allFavoriteComponents.length
    },
]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    '>
        {
            data.map((comp,idx)=>(
                <div className="flex items-center gap-4" key={idx}>
                 <div className="flex gap-4 items-center p-4 rounded flex-grow m-4 bg-red-100">
                 <div className="bg-red-200 w-14 h-14 flex items-center justify-center rounded-full font-bold">
                   {comp.icon}
                   </div>
                     <div className="">
                        <h1 className=' text-xl md:text-2xl font-bold'>{comp.number}</h1>
                        <p className='text-sm md:text-md text-gray-600'>{comp.name}</p>
                     </div>
                 </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards