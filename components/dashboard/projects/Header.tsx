//import the category icon

import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { CloseOutlined } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { BiPlusCircle } from 'react-icons/bi';
const Header = () => {
  return (
    <div className='flex justify-between'>
     <div className='flex items-center justify-center gap-2 font-bold'>
        <div className="flex items-center justify-center bg-red-200 h-12 w-12 rounded-full">
        <AccountTreeIcon />
        </div>
        <span className='font-bold text-2xl '>All Projects</span>
     </div>
     <div className="flex items-center gap-2 justify-center bg-red-200 hover:bg-red-300/80 transition  rounded-full font-bold px-4 cursor-pointer">
      <AddIcon />
      <span>Add new project</span>
     </div>
    <div className="bg-red-200 hover:bg-red-300 transition flex items-center justify-center h-12 w-12 rounded-full cursor-pointer">
    <CloseOutlined  />
    </div>
    </div>
  )
}

export default Header