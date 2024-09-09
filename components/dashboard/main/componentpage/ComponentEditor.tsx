import { useEffect, useRef, useState } from "react";
import AceEditor from "react-ace";
import prettier from "prettier/standalone";
import estreePlugin from "prettier/plugins/estree.js";
import { useAppContext } from "@/app/ContextApi";
import {
  Close,
  Code,
  FavoriteBorder,
  FormatShapes,
  TextFields,
} from "@mui/icons-material";
import { Checkbox } from "@mui/material";

import { FaSave } from "react-icons/fa";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import { toast } from "sonner";
import { Component } from "@/localData";

import { v4 as uuidv4 } from "uuid";
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ComponentEditor = () => {
  //
  const [copySuccess, setCopySuccess] = useState(false);

  //states
  const inputRef = useRef<HTMLInputElement>(null);
  const aceEditor = useRef<AceEditor | null>(null);
  //
  const {
    selectedProjectObject: { selectedProject, setSelectedProject },
    selectedComponentObject: { selectedComponent, setSelectedComponent },
    editorObject: { openEditorModal, setOpenEditorModal,code,setCode,inputName,setInputName },
    allProjectsObject: { allProjects, setAllProjects },
  } = useAppContext();

  //format code function
  const formatCode = async (codeToFormat: string) => {
    try {
      const formattedCode = await prettier.format(codeToFormat, {
        parser: "babel",
        plugins: [estreePlugin],
      });
      setCode(formattedCode);
    } catch (error) {
      console.error("Error formatting code:", error);
    }
  };
  const saveComponent = () => {
    //check if the project name not empty
    if (inputName.trim() === "" && !selectedComponent) {
      toast.error("Please enter a component name", { position: "top-center" });
      inputRef.current?.focus();
      return;
    }
    if (code.trim() === "") {
      toast.error("Please enter the component code", {
        position: "top-center",
      });
      return;
    }
    if (!selectedProject) {
      toast.error("No project selected", { position: "top-center" });
      return;
    }
    if (!selectedComponent) {
      //creating a new component
      const newComponent: Component = {
        _id: uuidv4(),
        name: inputName,
        code: code,
        isFavorite: false,
        projectName: selectedProject.name,
        createdAt: new Date().toISOString(),
      };

      //check if the component name already exist
      if (
        selectedProject.components.some(
          (component) =>
            component.name.toLowerCase() === inputName.toLowerCase()
        )
      ) {
        toast.error("Component name already exist, try another one", {
          position: "top-center",
        });
        inputRef.current?.focus();
        return;
      }
      addNewComponent(newComponent);
      setSelectedComponent(newComponent);
      toast.success("Component created successfully", {
        position: "top-center",
      });
      formatCode(newComponent.code);
    } else {
      //updating existing component
      const updatedComponent: Component = {
        ...selectedComponent,
        name: inputName,
        code: code,
      };
      //check if the name conflicts with other components (excluding the current one)
      if (
        selectedProject.components.some(
          (component) =>
            component.name.toLowerCase() === inputName.toLowerCase() &&
            component._id !== selectedComponent._id
        )
      ) {
        toast.error("Component name already exist, try another one", {
          position: "top-center",
        });
        inputRef.current?.focus();
        return;
      }
      updateExistingComponent(updatedComponent);
      setSelectedComponent(updatedComponent);
      toast.success("Component updated successfully", {
        position: "top-center",
      });
    }
  setOpenEditorModal(false);
  };
  //add new component function
  const addNewComponent = (newComponent: Component) => {
    if (selectedProject && allProjects) {
      const updatedProject = {
        ...selectedProject,
        components: [...selectedProject.components, newComponent],
      };
      const updatedAllProjects = allProjects.map((project) =>
        project._id === selectedProject._id ? updatedProject : project
      );
      setSelectedProject(updatedProject);
      setAllProjects(updatedAllProjects);
    }
  };
  //update existing component function
  const updateExistingComponent = (updatedComponent: Component) => {
    if (selectedProject && allProjects) {
      const updatedComponents = selectedProject.components.map((component) =>
        component._id === updatedComponent._id ? updatedComponent : component
      );

      const updatedProject = {
        ...selectedProject,
        components: updatedComponents,
      };
      const updatedAllProjects = allProjects.map((project) =>
        project._id === selectedProject._id ? updatedProject : project
      );
      setSelectedProject(updatedProject);
      setAllProjects(updatedAllProjects);
    }
   
    
  };
  //copy code
  const copyCode = () => {
    setCopySuccess(true);
    toast.success("Code copied successfully", { position: "top-center" });
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setCopySuccess(false);
    }, 4000);
  };
  const handleChange = (newValue: string) => {
    setCode(newValue);
  };
  useEffect(() => {
    formatCode(code);
  }, []);
  useEffect(() => { 
    setCode(selectedComponent ? selectedComponent.code : code);
    setInputName(selectedComponent ? selectedComponent.name : inputName);
  }, [selectedComponent]);
  const updateTheFavoriteState = () =>{
    if(selectedComponent !== null && allProjects !== null && selectedProject !== null){
      const updatedComponent = {
        ...selectedComponent,
        isFavorite : !selectedComponent.isFavorite
      }
      //update the component array in the selected project
      const updateComponents = selectedProject.components.map((component)=>
      component._id === selectedComponent._id ? updatedComponent : component
      )

      const updatedSelectedProject = {
        ...selectedProject,
        components: updateComponents
      }
      const updatedAllProjects = allProjects.map((project)=>
      project._id === selectedProject._id ? updatedSelectedProject : project
      )
      setSelectedComponent(updatedComponent);
      setSelectedProject(updatedSelectedProject);
      setAllProjects(updatedAllProjects);
    }else{
      console.log("Selected component,project or all projects is null");
    }
  }
  return (
    <div
      style={{ display: openEditorModal ? "flex" : "none" }}
      className="w-[96%] h-[96%] z-50 max-sm:h-[90%] max-sm:flex-col border-slate-100 flex-row overflow-hidden bg-white left-[2%] top-4 rounded-2xl shadow-md 
       absolute"
    >
      {/* left part */}
      <div className="w-1/2 max-sm:w-full h-full">
        {/* header */}
        <div className="flex justify-between items-center pt-7 px-8 ">
          <div className="flex items-center gap-2">
            {/* category icon */}
            <div className="w-[30px] h-[30px] bg-red-200 rounded-full flex items-center justify-center">
              <FormatShapes
                sx={{ fontSize: 17 }}
                className="text-red-400 text-[17px]"
              />
            </div>
            {/* category header */}
            <span className="font-semibold">Component Editor</span>
          </div>
          <Close
            onClick={() => setOpenEditorModal(false)}
            className="text-gray-400 hover:text-red-500 cursor-pointer"
          />
        </div>
        {/* input name */}
        <div className="flex flex-col gap-2 pt-14 px-8">
          {/* input label */}
          <div className="flex gap-3">
            <span className="flex gap-1 items-center text-[13px]">
              <TextFields className="text-[15px]" />
              <span>Component name</span>
            </span>
            <div className="">
              <Checkbox icon={<FavoriteIcon className={"text-gray-500"} />}
            checkedIcon={<FavoriteIcon className={"text-red-500"} />} sx={{ fontSize: 20 }} checked={selectedComponent?.isFavorite} onChange={updateTheFavoriteState} />
            </div>
          </div>
          {/* input */}
          <div className="flex gap-3">
            <input
              ref={inputRef}
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter Component name"
              className="w-full border-2 border-red-200 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>
        </div>
        {/* input code */}
        <div className="flex flex-col gap-2 pt-6 px-8  ">
          <div className="flex justify-between">
            {/* input label */}
            <span className="flex gap-8 items-center">
              <div className="flex gap-1 items-center text-[13px]">
                <Code className="text-[15px] font-bold" />
                <span>Jsx code</span>
              </div>
              {/* copy code  */}
              {!copySuccess ? (
                <div
                  onClick={copyCode}
                  className="flex items-center gap-1 text-gray-400 hover:text-gray-700 cursor-pointer transition"
                >
                  <span className=" text-sm">Copy code</span>
                  <FaRegCopy />
                </div>
              ) : (
                <div className="flex items-center gap-1 text-gray-400 transition">
                  <span className="text-sm">Code copied</span>
                  <MdOutlineLibraryAddCheck />
                </div>
              )}
            </span>
            <button
              onClick={saveComponent}
              className="bg-red-200 hover:bg-red-300/80 transition p-3 rounded-full flex items-center justify-centers"
            >
              <FaSave className="size-4" />
            </button>
          </div>
          <div className="border border-slate-200 rounded-md relative mt-1">
            <AceEditor
              ref={aceEditor}
              mode="jsx"
              theme="monokai"
              name="jsxEditor"
              value={selectedComponent ? selectedComponent.code : code}
              editorProps={{ $blockScrolling: true }}
              onChange={handleChange}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }}
              fontSize={14}
              width="100%"
              height="440px"
            />
          </div>
        </div>
      </div>
      {/* right part */}
      <div className="w-1/2 max-sm:w-full max-sm:border-t border-l max-sm:mt-5 border-slate-100 h-full">
        <LiveProvider code={code} noInline={false}>
          <div className="">
            <LiveError className="rounded-lg text-red-600 border-gray-200" />
            <LivePreview className="rounded-lg border-gray-200 p-4" />
          </div>
        </LiveProvider>
      </div>
    </div>
  );
};

export default ComponentEditor;
