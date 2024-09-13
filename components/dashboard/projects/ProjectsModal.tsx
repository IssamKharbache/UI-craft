"use client";
import { useAppContext } from "@/app/ContextApi";
import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const ProjectsModal = () => {
  const {
    projectsModal: { openProjectsModal },
    addProjectModelObject: { addModelOpen },
  } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  if (addModelOpen) {
    return <SoftLayer />;
  }
  return (
    <div
      style={{ display: openProjectsModal ? "block" : "none " }}
      className="flex flex-col gap-8 w-[70%] max-sm:w-[90%] p-9 border border-slate-50 h-[82%] bg-white rounded-xl shadow-md absolute z-30 left-1/2 -translate-x-1/2  top-16"
    >
      <Header />
      {AllprojectsData.length > 0 && (
        <>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SortBy />
        </>
      )}
      <ProjectList searchQuery={searchQuery} />
    </div>
  );
};

export default ProjectsModal;

import WarningIcon from "@mui/icons-material/Warning";
const ProjectList = ({ searchQuery }: { searchQuery: string }) => {
  const {
    addProjectModelObject: { setAddModelOpen },
    allProjectsObject: { allProjects, isLoading },
  } = useAppContext();

  const filteredProjects = allProjects.filter((singleProject) =>
    singleProject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 h-[64%] rounded-lg p-3 flex flex-col gap-3">
      {isLoading && (
        <div className="flex flex-col gap-3 justify-center items-center w-full mt-28">
          <CircularProgress value={100} />
          <span className="text-slate-400 text-sm">Loading...</span>
        </div>
      )}
      {allProjects.length === 0 && !isLoading ? (
        <NoProjects />
      ) : (
        <>
        {filteredProjects.length > 0 ? <>
          {filteredProjects.map((project, index) => (
            <SingleProject project={project} key={index} />
          ))}
        </> 
        
        : (
         <>
         {!isLoading && <NoProjectsSearchedFound />}
         </>
        )
        }
        </>
        // allProjects.map((project, index) => (
        //   <SingleProject project={project} key={index} />
        // ))
      )}
    </div>
  );
};
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AllprojectsData, Project } from "@/localData";
import { SoftLayer } from "../ContentArea";
import { TextToIcon } from "@/utils/TextToIcon";
import { CircularProgress } from "@mui/material";
const SingleProject = ({ project }: { project: Project }) => {
  return (
    <div className="w-full bg-slate-100 rounded-md flex gap-3 items-center justify-between p-3">
      <div className="flex items-center gap-3 ">
        <DragIndicatorIcon className="text-slate-400" />
        <div className="flex items-center justify-center">
          <div className="w-[30px] h-[30px] bg-red-200 rounded-full flex items-center justify-center">
            {TextToIcon({
              text: project.icon,
              className: "text-red-400",
              fontSize: 15,
            })}
          </div>
        </div>
        {/* project name */}
        <div className="flex flex-col">
          <span className="font-bold">{project.name}</span>
          <span className="text-slate-400 text-[12px]">
            {project.components.length} Components
          </span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {/* Edit button */}
        <div className="bg-slate-200 hover:bg-slate-300 transition cursor-pointer rounded-full p-2 text-red-400 text-xs">
          <EditIcon className="text-gray-700" sx={{ fontSize: 17 }} />
        </div>
        {/* Delete button */}
        <div className="bg-red-200 hover:bg-red-300 transition cursor-pointer rounded-full p-2 text-red-400 text-xs">
          <DeleteIcon className="text-gray-700" sx={{ fontSize: 17 }} />
        </div>
      </div>
    </div>
  );
};

const NoProjects = () => {
  const {
    addProjectModelObject: { setAddModelOpen },
  } = useAppContext();
  return (
    <div className="flex flex-col items-center justify-center gap-4  text-slate-400 text-sm mt-24">
      <WarningIcon sx={{ fontSize: 50 }} className="text-red-400" />
      <p>No Projects Found</p>
      <p>Create your first project to get started</p>
      <button
        onClick={() => setAddModelOpen(true)}
        className="bg-red-400 hover:bg-red-500 transition text-white text-sm p-2 px-4 rounded-md max-w-md mx-auto"
      >
        Create Project
      </button>
    </div>
  );
};


const NoProjectsSearchedFound  = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4  text-slate-400 text-sm mt-24">
      <WarningIcon sx={{ fontSize: 50 }} className="text-red-400" />
      <p>Oops! That project seems to be missing</p>
      <p>Try searching with a different keyword</p>
    </div>
  );
};
