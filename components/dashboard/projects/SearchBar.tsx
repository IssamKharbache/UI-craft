import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='flex items-center justify-center gap-4 mt-24'>
        <input type='text' placeholder='Search a project...' className='bg-red-200 h-12 w-full rounded-lg px-4 text-sm max-w-md placeholder:text-gray-500 focus:border-2 focus:outline-none focus:border-red-400' />    
        <button className='bg-primary hover:bg-primary-hover transition text-white font-bold px-4 py-2 rounded-lg'>
            <SearchIcon />
        </button>
    </div>
  )
}

export default SearchBar