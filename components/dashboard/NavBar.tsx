import ResponsiveSideBar from './ResponsiveSideBar';
import Search from './Search';
import UserAvatar from './UserAvatar';
import WelcomeMessage from './WelcomeMessage';
import { CgMenuLeftAlt } from "react-icons/cg";

const NavBar =   () => {
  return (
    <nav className='flex justify-between   items-center px-8 bg-red-200/50   h-16 '>
        <ResponsiveSideBar />
        <WelcomeMessage />
        <Search />
        <UserAvatar />
    </nav>
  )
}

export default NavBar