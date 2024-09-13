"use client";
import { useAppContext } from '@/app/ContextApi';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from "@mui/icons-material/Add";

const SearchBar = () => {
  const {
    addProjectModelObject: { setAddModelOpen },
  } = useAppContext();
  return (
    <div className='flex items-center justify-between  mt-8'>
      <div className="flex items-center  gap-2">
      <input type='text' placeholder='Search a project...' className='bg-red-200 h-12 w-full rounded-lg px-4 py-2 text-sm flex-grow placeholder:text-gray-500 focus:border-2 focus:outline-none focus:border-red-400' />    
        <button className='bg-primary hover:bg-primary-hover transition text-white font-bold px-4 py-2 h-12 rounded-lg'>
            <SearchIcon />
        </button>
      </div>
        <div
        onClick={() => setAddModelOpen(true)}
        className="flex items-center gap-2 justify-center bg-red-200 hover:bg-red-300/80 transition  rounded-full font-bold px-4 py-2 cursor-pointer"
      >
        <AddIcon />
        <span className="hidden md:block">Add new project</span>
      </div>
    </div>
  )
}

export default SearchBar