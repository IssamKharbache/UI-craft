"use client";
import { useAppContext } from "@/app/ContextApi";
import SingleComponentPage from "./SingleComponent";
import AddIcon from '@mui/icons-material/Add';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import { TextToIcon } from "@/utils/TextToIcon";

const ComponentPage = () => {
  const {
    showComponentPageObject: { setShowComponentPage, showComponentPage },
    selectedProjectObject: { selectedProject },
  } = useAppContext();
  if (selectedProject?.components.length === 0) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center mt-44">
          <div className="bg-red-200 h-32 w-32 rounded-full flex items-center justify-center text-7xl">
           {selectedProject.icon !== undefined && TextToIcon({text:selectedProject.icon ,size: "large"})}
          </div>
        <h1 className="text-lg font-bold ">
         There is no component in this project yet
        </h1>
        <p className="text-sm text-gray-500">Please click down too add a component</p>
        <button className="flex items-center bg-primary px-4 py-2 rounded hover:bg-primary-hover transition text-white font-bold">
          <AddIcon />
          <span>Add new component</span>
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 overflow-auto max-h-[830px]">
      {selectedProject?.components.map((component, index) => (
        <div key={index}>
          <SingleComponentPage component={component} />
        </div>
      ))}
    </div>
  );
};

export default ComponentPage;
