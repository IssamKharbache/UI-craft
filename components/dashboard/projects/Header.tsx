"use client";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { CloseOutlined } from "@mui/icons-material";
import { useAppContext } from "@/app/ContextApi";
const Header = () => {
  const {
    projectsModal: { setOpenProjectsModal },
    addProjectModelObject: { setAddModelOpen },
  } = useAppContext();
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2 font-bold">
        <div className="flex items-center justify-center bg-red-200 w-8 h-8 md:h-12 md:w-12 rounded-full">
          <AccountTreeIcon className="text-[14px] md:text-[20px]" />
        </div>
        <span className="font-bold text-md md:text-2xl  ">All Projects</span>
      </div>
    
      <div
        onClick={() => setOpenProjectsModal(false)}
        className="bg-red-200 hover:bg-red-300 transition flex items-center justify-center w-8 h-8 md:h-12 md:w-12 rounded-full cursor-pointer"
      >
        <CloseOutlined />
      </div>
    </div>
  );
};

export default Header;
