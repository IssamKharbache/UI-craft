"use client";
import { useAppContext } from '@/app/ContextApi';
import { ArrowLeft ,KeyboardArrowLeftTwoTone} from '@mui/icons-material';
import { PiPlusCircleDuotone } from 'react-icons/pi';

PiPlusCircleDuotone
const NavBar = () => {

  return (
    <div className='flex items-center  justify-between  mt-4 px-7 mb-4'>
        {/* back button and name */} 
        <LeftSide />
        {/* search */}
         <SearchInput />
        {/* add component button */}
        <button className='flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition'>
          <PiPlusCircleDuotone size={25} />
          <span>Component</span>
        </button>
    </div>
  )
}

export default NavBar


//search component
const SearchInput = () =>{
return (
  <div className="">
          <input type="text" placeholder='Search...' className='py-2 border-2 border-gray-200 px-4 rounded  outline-none focus:border-red-200' />
        </div>
)
}
//left side component
const LeftSide = () =>{
  const {showComponentPageObject:{setShowComponentPage,showComponentPage}} = useAppContext();
  return(
    <div className="flex items-center gap-4"> 
    <button className='flex items-center gap-2 border border-red-200 rounded py-2 px-4' onClick={() => setShowComponentPage(false)}>
     <KeyboardArrowLeftTwoTone />
     <span>Back</span>
     </button>
    
    <div className="flex flex-col">
    <span className='font-bold text-xl'>Component name</span>
    <span className='text-slate-400 text-sm '>Component description</span>
    </div>

 </div>
  )
}