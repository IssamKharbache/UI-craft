"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { HiMiniHome } from "react-icons/hi2";
import { IoIosHeart } from "react-icons/io";
import { TbCategory2 } from "react-icons/tb";

interface MenuItem {
  id: string;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
  href: string;
}

//context state

interface AppContextType {
  menuItemsObject: {
    menuItems: MenuItem[];
    setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  };
  sideBarOpen: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const defaultState: AppContextType = {
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
  sideBarOpen: {
    isOpen: true,
    setIsOpen: () => {},
  },
};
const AppContext = createContext<AppContextType>(defaultState);
//create default state

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
    //side bar menu
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "home",
      href: "/dashboard",
      icon: <HiMiniHome />,
      isSelected: true,
    },
    {
      id: "3",
      name: "categories",
      href: "/categories",
      icon: <TbCategory2 />,
      isSelected: false,
    },
    {
      id: "3",
      name: "favorites",
      href: "/favorites",
      icon: <IoIosHeart />,
      isSelected: false,
    },
  ]);
   //side bar opening state
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return null;
    const storedValue = localStorage.getItem("openedSideBar");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  //update local storage when ever sidebar states changes

  useEffect(() => {
    localStorage.setItem("openedSideBar", JSON.stringify(isOpen));
  }, [isOpen]);
  

  return (
    <AppContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        sideBarOpen: { isOpen, setIsOpen },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
