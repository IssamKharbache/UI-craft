import Search from './Search';
import UserAvatar from './UserAvatar';
import WelcomeMessage from './WelcomeMessage';
import { CgMenuLeftAlt } from "react-icons/cg";

const NavBar = async  () => {
  return (
    <nav className='flex justify-between   items-center px-8 bg-red-200/50   h-16 '>
        <div className="flex md:hidden">
        <CgMenuLeftAlt size={25} />
        </div>
        <WelcomeMessage />
        <Search />
        <UserAvatar />
    </nav>
  )
}

export default NavBar