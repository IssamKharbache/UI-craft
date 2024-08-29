"use client";

import { useAppContext } from "@/app/ContextApi";
import { Component, Project } from "@/localData";
import { DeleteForeverOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "sonner";

const DeleteModal = () => {
  const {
    selectedProjectObject: { selectedProject, setSelectedProject },
    allProjectsObject: { allProjects, setAllProjects },
    deleteModalObject: { openDeleteModal, setOpenDeleteModal },
    selectedComponentObject:{selectedComponent,setSelectedComponent},
  } = useAppContext();
  const deleteComponent = () => {

    try {
      if (selectedProject) {
        const updatedSelectedProject = {
          ...selectedProject,
          components: selectedProject.components.filter(
            (component: Component) => component._id !== selectedComponent?._id
          ),
        };
        setSelectedProject(updatedSelectedProject);
      }

      const allProjectsUpdated = allProjects.map((project: Project) => {
        if (project._id === selectedProject?._id) {
          return {
            ...project,
            components: project.components.filter(
              (component: Component) => component._id !== selectedComponent?._id
            ),
          };
        }
        return project;
      });
      setAllProjects(allProjectsUpdated);
      setOpenDeleteModal(false);
      toast.success("Component deleted successfully", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Something went wrong, Try again", {
        position: "top-center",
      });
    }
  };
  return (
    <div
      style={{ visibility: openDeleteModal ? "visible" : "hidden" }}
      className={`flex flex-col gap-3 w-[40%] z-50 max-sm:[90%] absolute p-8 px-9 border
     border-slate-100 bg-white shadow-md top-[30%] left-[40%] rounded`}
    >
      <div className="flex justify-between">
        <h1 className="font-bold text-lg"></h1>
        <div className="flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full w-8 h-8 cursor-pointer transition">
          <CloseIcon
            fontSize="medium"
            onClick={() => {
              setOpenDeleteModal(false);
            }}
            className="text-gray-500 "
          />
        </div>
      </div>
      <h1 className="text-xl font-bold">Delete this component permanently?</h1>
      <p className="text-gray-400 text-sm">
        Are you sure you want to delete this component?
      </p>
      <p className="text-red-400 text-sm">This action cannot be undone.</p>
      <div className="flex justify-between">
        <div className=""></div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setOpenDeleteModal(false)}
            className="flex items-center bg-none px-4 py-2 rounded hover:bg-slate-200 transition text-black"
          >
            <CloseIcon />
            <span>Cancel</span>
          </button>
          <button
            onClick={deleteComponent}
            className="flex gap-2 items-center bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition text-white "
          >
            <DeleteForeverOutlined />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
