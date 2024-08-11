"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMiniHome } from "react-icons/hi2";
import { TbCategory2 } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { useAppContext } from '@/app/ContextApi';
import { useWidth } from '@/utils/getDemensions';






const links = [
    {
        name:"home",
        href:"/dashboard",
        icon:HiMiniHome 
    },
    {
        name:"categories",
        href:"/categories",
        icon:TbCategory2 
    },
    {
        name:"favorites",
        href:"/favorites",
        icon:IoIosHeart 
    },
]
const SideBarLinks = ({isResp}:{isResp:boolean}) => {
  const width = useWidth();
  
    const path = usePathname();
    const {menuItemsObject:{menuItems},sideBarOpen:{isOpen,setIsOpen},showResponsiveSideBarObject:{setShowResSeachBar}} = useAppContext();

    if(width <=1295){
      setIsOpen(true);
    }
  
  return (
    <div className='flex flex-col gap-6'>
        {
            menuItems.map((link,index)=>{
              return(
                <Link onClick={()=>isResp && setShowResSeachBar(false)} href={link.href} key={index} className={`flex items-center gap-2 text-slate-700 text-lg capitalize border border-red-200 hover:bg-red-300 transition  rounded py-2  ${path === link.href && "bg-red-300 text-slate-900" } ${isOpen ? "ml-0 px-6":"ml-60 px-3"} `}>
                    {link.icon}
                  <span className={`${!isOpen && "hidden" }`}>{link.name}</span>
                </Link>
              )  
            })
        }
    </div>
  )
}

export default SideBarLinks