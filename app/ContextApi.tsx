"use client";

import { AllprojectsData, Project } from "@/localData";
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
  showSeachBarObject: {
    showSearchBar: boolean;
    setShowSeachBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  showResponsiveSideBarObject: {
    showResponsiveSearchBar: boolean;
    setShowResSeachBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allProjectsObject: {
    allProjects: Project[];
    setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>;
    isLoading:boolean;
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
  showSeachBarObject: {
    showSearchBar: false,
    setShowSeachBar: () => {},
  },
  showResponsiveSideBarObject: {
    showResponsiveSearchBar: false,
    setShowResSeachBar: () => {},
  },
  allProjectsObject: {
    allProjects: [],
    setAllProjects: () => {},
    isLoading:false,
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
  //
  const [showSearchBar, setShowSeachBar] = useState(false);
  //
  const [showResponsiveSearchBar, setShowResSeachBar] = useState(false);
  //projects state
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [isLoading,setIsLoading] = useState(false);

  //simulate the fetch using set time out
  useEffect(() => {
    setIsLoading(true);
    function fetchAllProjects() {
      setTimeout(() => {
        setAllProjects(AllprojectsData);
        setIsLoading(false);
      }, 3000);
    }
    fetchAllProjects();
  }, []);

  //update local storage when ever sidebar states changes

  useEffect(() => {
    localStorage.setItem("openedSideBar", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <AppContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        sideBarOpen: { isOpen, setIsOpen },
        showSeachBarObject: { showSearchBar, setShowSeachBar },
        showResponsiveSideBarObject: {
          showResponsiveSearchBar,
          setShowResSeachBar,
        },
        allProjectsObject: { allProjects, setAllProjects,isLoading },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
