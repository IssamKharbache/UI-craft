import { IoIosAdd } from "react-icons/io";

const AllProjects = () => {
  return (
    <div className='bg-white w-full p-8 rounded-lg mt-4'>
        {/* HEADER */}
        <span className='text-lg flex gap-2 justify-between items-center'>
            {/*  */}
            <div className="flex gap-4 items-center">
                <span className='font-bold text-lg'>All Projects</span>
                <span className='text-[14px] text-red-500 cursor-pointer'>More</span>
            </div>
            {/* New Project button */}
            <button className='flex items-center gap-2 text-white font-bold bg-primary hover:bg-primary-hover transition-all text-[12px] px-3 py-[2px] rounded-md'>
            <IoIosAdd size={25} />
            <span className="text-[13px]">New Project</span>
            </button>
        </span>
        {/* projects */}
        <div className="flex flex-wrap gap-4 mt-7 mb-2 max-sm:grid max-sm:grid-cols-1">
            <SingleProject />
            <SingleProject />
            <SingleProject />
            <SingleProject />
            <SingleProject />
            <SingleProject />
            <SingleProject />
            <SingleProject />
        </div>
    </div>
  )
}

export default AllProjects;



const SingleProject = () =>{
    return(
        <div className="w-[200px] border border-slate-100 rounded-md p-5 flex gap-2 justify-center flex-col items-center max-sm:w-full">
            {/* THE ICON */}
               <div className="w-[70px] h-[70px] bg-red-100 rounded-full flex items-center justify-center">
               <IoIosAdd />
               </div>
               {/* name and component count */}
               <div className="flex flex-col items-center justify-center">
                <span className="font-semibold text-lg cursor-pointer hover:text-red-400 select-none">Buttons</span>
                <span className="text-[12px] text-slate-400 text-center">10 Components</span>
               </div>
        </div>
    )
}