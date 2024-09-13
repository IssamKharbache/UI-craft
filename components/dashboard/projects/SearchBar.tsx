"use client";
import { useAppContext } from '@/app/ContextApi';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from "@mui/icons-material/Add";
import { useRef } from 'react';

const SearchBar = ({searchQuery,setSearchQuery}:{searchQuery:string,setSearchQuery:React.Dispatch<React.SetStateAction<string>>}) => {
  const {
    addProjectModelObject: { setAddModelOpen },
  } = useAppContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className='flex items-center justify-between  mt-8 w-full'>
      <div className="flex items-center  gap-2 w-full">
      <input ref={inputRef} value={searchQuery} onChange={handleChange}  type='text' placeholder='Search a project...' className='bg-red-200 h-12 max-w-md rounded-lg px-4 py-2 text-sm flex-grow placeholder:text-gray-500 focus:border-2 focus:outline-none focus:border-red-400' />    
      </div>
        <div
        onClick={() => setAddModelOpen(true)}
        className="flex items-center gap-2 justify-center bg-red-200 hover:bg-red-300/80 transition rounded-full   font-bold px-4 py-2 cursor-pointer"
      >
        <AddIcon />
        <span className="hidden md:block">Project</span>
      </div>
    </div>
  )
}

export default SearchBar