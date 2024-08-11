import Search from './Search';
import UserAvatar from './UserAvatar';
import WelcomeMessage from './WelcomeMessage';

const NavBar = async  () => {
  return (
    <nav className='flex justify-between   items-center px-8 bg-red-200/50   h-16 '>
        <WelcomeMessage />
        <Search />
        <UserAvatar />
    </nav>
  )
}

export default NavBar