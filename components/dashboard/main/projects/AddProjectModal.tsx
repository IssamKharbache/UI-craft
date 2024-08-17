"use client";
import { TbCategoryPlus } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { useAppContext } from "@/app/ContextApi";
import { RiApps2AddLine } from "react-icons/ri";
import { SoftLayer } from "../../ContentArea";
const AddProjectModal = () => {
  const {
    addProjectModelObject: { addModelOpen, setAddModelOpen },
    iconModalObject: { iconModalOpen, setIconModalOpen },
  } = useAppContext();
  return (
   
    <div
      className={`p-2 md:p-8 w-[80%] lg:w-[40%] border border-slate-50 bg-white rounded-md shadow-md  left-1/2 top-24 -translate-x-1/2 z-20 ${
        addModelOpen ? "absolute" : "hidden"
      } ${iconModalOpen && "  bg-black opacity-90"}`}
    >
      {/*  */}
      {/* HEADER */}
      <div className="flex justify-between items-center pt-7 px-7 ">
        <div className="flex items-center gap-2">
          {/* project icon */}
          <div className="w-[30px] h-[30px] bg-red-200 rounded-full flex items-center justify-center">
            <TbCategoryPlus className="text-red-400 text-[12px]" />
          </div>
          {/* cateogry header */}  <span className="font-semibold text-lg">New Project</span>
         
        </div>
        <IoCloseOutline onClick={() => setAddModelOpen(false)} className="text-slate-700 text-[18px] cursor-pointer" />
      </div>
      {/* body */}
      <div className="flex flex-col gap-2 mt-11 px-7">
        <span className="text-[15px] font-medium">Project Name</span>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="outline-none border-2 border-slate-300 rounded-sm px-3 py-2 focus:border-primary"
            type="text"
            placeholder="Enter Project Name..."
          />
          {/* icon */}
          <button onClick={()=>setIconModalOpen(true)}  className="w-12 h-10 text-white flex items-center justify-center bg-red-200 hover:bg-red-300/80 transition rounded-lg cursor-pointer">
            <RiApps2AddLine className="text-red-400 text-[20px]" />
          </button>
        </div>
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
        <button className="bg-primary hover:bg-primary-hover text-white text-sm px-4 py-2 rounded-md transition">
          Add a project
        </button>
      </div>
    </div>
  );
};

export default AddProjectModal;
