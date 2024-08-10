import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiSearchCircle } from 'react-icons/hi'

const Search = () => {
  return (
    <div className="relative bg-red-200 w-1/3 cursor-pointer hover:bg-red-300/65 transition-all p-[8px] flex gap-4 justify-center items-center rounded-md">
    <BiSearch className='text-slate-500 ' />
    <span className='text-slate-500 text-sm'>Search</span>
  </div>
  )
}

export default Search