"use client";
import { useAppContext } from "@/app/ContextApi";
import { Project } from "@/localData";
import { TextToIcon } from "@/utils/TextToIcon";
import { IoIosAdd } from "react-icons/io";

import { GrChapterAdd } from "react-icons/gr";

const AllProjects = () => {
  const {
    allProjectsObject: { allProjects, setAllProjects, isLoading },
    showComponentPageObject:{setShowComponentPage,showComponentPage},
    addProjectModelObject: { addModelOpen, setAddModelOpen },

  } = useAppContext();
  return (
    <div className="bg-white w-full p-8 rounded-lg mt-4">
      {/* HEADER */}
      <span className="text-lg flex gap-2 justify-between items-center">
        {/*  */}
        <div className="flex gap-4 items-center">
          <span className="font-bold text-lg">All Projects</span>
          <span className="text-[14px] text-red-500 cursor-pointer">More</span>
        </div>
        {/* New Project button */}
        {!isLoading && allProjects.length > 0 && (
          <button onClick={() => setAddModelOpen(true)} className="flex items-center gap-2 text-white font-bold bg-primary hover:bg-primary-hover transition-all text-[12px] px-3 py-[2px] rounded-md">
            <IoIosAdd size={25} />
            <span className="text-[13px] max-sm:hidden">New Project</span>
          </button>
        )}
      </span>
      {/* projects */}
      {/* skeleton loader when loading data  */}
      {isLoading && (
        <div className="flex gap-8">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        </div>
      )}
      {/* check if there is no data */}
      {!isLoading && allProjects.length === 0 ? (
        <NoProjects />
      ) : (
        <div className="flex flex-wrap gap-4 mt-7 mb-2 max-sm:grid max-sm:grid-cols-1">
          {/* show projects if there is some */}
          {allProjects?.map((project, index) => (
            <div className="" key={index}>
              <SingleProject singleProject={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProjects;

const SingleProject = ({ singleProject }: { singleProject: Project }) => {
  const {showComponentPageObject:{setShowComponentPage,showComponentPage}} = useAppContext();
  return (
    <div className="w-[200px] border border-slate-100 rounded-md p-5 flex gap-2 justify-center flex-col items-center max-sm:w-full">
      {/* THE ICON */}
      <div className="w-[70px] h-[70px] bg-red-100 rounded-full flex items-center justify-center">
        {TextToIcon({ text: singleProject.icon, size: "medium" })}
      </div>
      {/* name and component count */}
      <div className="flex flex-col items-center justify-center">
        <span onClick={()=> setShowComponentPage(true)}  className="font-semibold text-lg cursor-pointer hover:text-red-400 select-none">
          {singleProject.name}
        </span>
        <span className="text-[12px] text-slate-400 text-center">
          {singleProject.components.length} Components
        </span>
      </div>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse flex gap-4">
      <div className="flex items-center flex-col gap-2">
      <div className="h-16 w-16 rounded-full bg-red-200 mt-4"></div>
      <div className="h-4 w-12 rounded-full bg-red-200 mt-4"></div>
      <div className="h-4 w-24 rounded-full bg-red-200 mt-4"></div>
      </div>
      
    </div>
  );
};

const NoProjects = () => {
  return (
    <div className="flex flex-col gap-4 items-center bg-red-100/70  text-center mt-4 p-4  "><GrChapterAdd className="size-16"  />
      <h1 className="font-semibold text-lg">You have no Projects yet</h1>
      <p className="text-sm text-gray-500">Click below to add your project</p>
      <button className="bg-primary px-4 py-2 rounded hover:bg-primary-hover transition text-white font-bold">Add new Project</button>
    </div>
  );
};
