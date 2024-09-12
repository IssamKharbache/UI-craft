"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppContext } from "@/app/ContextApi";
import { useWidth } from "@/utils/getDemensions";
import { useEffect, useState } from "react";

import AccountTreeIcon from "@mui/icons-material/AccountTree";

const SideBarLinks = ({ isResp }: { isResp: boolean }) => {
  const width = useWidth();
  const [isActive, setIsActive] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const {
    menuItemsObject: { menuItems },
    sideBarOpen: { isOpen, setIsOpen },
    showResponsiveSideBarObject: { setShowResSeachBar },
    showComponentPageObject: { setShowComponentPage },
    projectsModal: { openProjectsModal, setOpenProjectsModal },
  } = useAppContext();

  if (width <= 1295) {
    setIsOpen(true);
  }
  const handleModalOpen = () => {
    setOpenProjectsModal(true);
    router.push("/dashboard");
  };
  useEffect(() => {
    if (openProjectsModal) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [openProjectsModal]);

  return (
    <div className="flex flex-col gap-6">
      {menuItems.map((link, index) => {
        return (
          <Link
            onClick={() => {
              isResp && setShowResSeachBar(false);
              setShowComponentPage(false);
            }}
            href={link.href === "/projects" ? "/dashboard" : link.href}
            key={index}
            className={`flex items-center gap-2 text-slate-700 text-lg capitalize border border-red-200 hover:bg-red-300 transition  rounded py-2 ${path === link.href && !isActive && "bg-red-300 text-slate-900"} ${isOpen ? "ml-0 px-6" : "ml-60 px-3"} `}
          >
            {link.icon}
            <span className={`${!isOpen && "hidden"}`}>{link.name}</span>
          </Link>
        );
      })}
      <button
        onClick={handleModalOpen}
        className={`flex items-center gap-2 text-slate-700 text-lg capitalize border border-red-200 hover:bg-red-300 transition  rounded py-2 ${isActive && "bg-red-300 text-slate-900"} ${isOpen ? "ml-0 px-6" : "ml-60 px-3"} `}
      >
        <AccountTreeIcon />
        <span className={`${!isOpen && "hidden"}`}>Projects</span>
      </button>
    </div>
  );
};

export default SideBarLinks;
