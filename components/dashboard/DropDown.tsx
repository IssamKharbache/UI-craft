import Link from "next/link";
import { IoMdSettings } from "react-icons/io";

const DropDown = ({showDropDown}:{showDropDown:boolean}) => {
  
  return (
    <div className={`flex flex-col gap-2 bg-red-300  right-[60px] p-8 px-12 rounded   ${showDropDown ? "absolute" :"hidden "}`}>
      <Link className="flex  items-center gap-4 text-white text-lg hover:text-red-100 transition-all " href="/settings" >
      <IoMdSettings />
      <span>Edit profile</span>
      </Link>
      <hr />
    </div>
  )
}

export default DropDown;