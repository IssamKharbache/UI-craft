//import the category icon

import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { CloseOutlined } from '@mui/icons-material';
const Header = () => {
  return (
    <div className='flex justify-between'>
     <div className='flex items-center justify-center gap-2 font-bold'>
        <div className="flex items-center justify-center bg-red-200 h-12 w-12 rounded-full">
        <AccountTreeIcon />
        </div>
        <span className='font-bold text-2xl '>All Projects</span>
     </div>
    <div className="bg-slate-200 hover:bg-slate-300 transition flex items-center justify-center h-12 w-12 rounded-full cursor-pointer">
    <CloseOutlined  />
    </div>
    </div>
  )
}

export default Header