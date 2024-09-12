"use client";
import { TbCategoryPlus } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { useAppContext } from "@/app/ContextApi";
import React, { useRef, useState } from "react";
import { SelectedIcon } from "@/app/(pages)/(dashboard)/dashboard/page";
import { BiSolidErrorAlt } from "react-icons/bi";
import { AllprojectsData, Project } from "@/localData";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

const AddProjectModal = ({ selectedIcon }: { selectedIcon: SelectedIcon }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    addProjectModelObject: { addModelOpen, setAddModelOpen },
    iconModalObject: { iconModalOpen, setIconModalOpen },
    allProjectsObject:{setAllProjects}
  } = useAppContext();

  const {data:session} = useSession();
  

  const handleInputUpdate = (e: any) => {
    setErrorMessage("");
    setProjectName(e.target.value);
  };
  function handleAddProject() {
    if (projectName.trim() === "") {
      setErrorMessage("Project name cannot be empty");
      inputRef.current?.focus();
      return;
    }
    //check if the project name already exists
    if (
      AllprojectsData.find(
        (project) =>
          project.name.toLocaleLowerCase() === projectName.toLocaleLowerCase()
      )
    ) {
      setErrorMessage("Project name already exists");
      inputRef.current?.focus();
      return;
    }
    const newProject:Project = {
      _id:"testid",
      nextAuthId: session?.user?.id  ?? "",
      name: projectName,
      icon: selectedIcon?.name,
      createdAt:new Date().toISOString(),
      components: [],
    }
    
    //adding project
    try {
      setAllProjects([...AllprojectsData, newProject]);
      setAddModelOpen(false);
      toast.success("Project added successfully",{position: "top-center" ,style: {fontWeight: "bold",}});
      setProjectName("");
    } catch (error) {
      toast.error("Error adding project",{position: "top-center" ,style: {fontWeight: "bold",}});
    }
   
   
  }
  return (
    <div
      className={`p-2 md:p-8 w-[80%] lg:w-[40%] border border-slate-50 bg-white rounded-md shadow-md  left-1/2 top-24 -translate-x-1/2 z-50 ${
        addModelOpen ? "absolute" : "hidden"
      }`}
    >
      {/*  */}
      {/* HEADER */}
      <div className="flex justify-between items-center pt-7 px-7 ">
        <div className="flex items-center gap-2">
          {/* project icon */}
          <div className="w-[30px] h-[30px] bg-red-200 rounded-full flex items-center justify-center">
            <TbCategoryPlus className="text-red-400 text-[16px]" />
          </div>
          {/* cateogry header */}
          <span className="font-semibold text-lg">New Project</span>
        </div>
        <IoCloseOutline
          onClick={() => setAddModelOpen(false)}
          className="text-slate-700 text-[18px] cursor-pointer"
        />
      </div>
      {/* body */}
      <div className="flex flex-col gap-2 mt-11 px-7 ">
        <span className="text-[15px] font-medium">Project Name</span>
        <div className="flex flex-col md:flex-row  gap-4 ">
          <input
            ref={inputRef}
            onChange={handleInputUpdate}
            className="outline-none border-2 border-slate-300 rounded-sm px-3 py-2 focus:border-primary w-1/2"
            type="text"
            placeholder="Enter Project Name..."
          />
          {/* icon */}
          <button
            onClick={() => setIconModalOpen(true)}
            className="w-12 h-10 text-white flex items-center justify-center bg-red-300 hover:bg-red-400/80 transition rounded-lg cursor-pointer"
          >
            {selectedIcon?.icon}
          </button>
        </div>
        {errorMessage && (
          <div className="flex items-center gap-2 text-red-500 text-xs">
            <BiSolidErrorAlt size={20} />{" "}
            <span className="text-red-500 text-xs">{errorMessage}</span>
          </div>
        )}
      </div>
      {/* footer */}
      <div className="w-full mt-11 flex gap-3 justify-end px-7 items-center mb-4">
        {/* cancel button */}
        <button
          onClick={() => setAddModelOpen(false)}
          className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm px-4 py-2 rounded-md transition"
        >
          Cancel
        </button>
        <button
          onClick={handleAddProject}
          className="bg-primary hover:bg-primary-hover text-white text-sm px-4 py-2 rounded-md transition"
        >
          Add a project
        </button>
      </div>
    </div>
  );
};

export default AddProjectModal;
