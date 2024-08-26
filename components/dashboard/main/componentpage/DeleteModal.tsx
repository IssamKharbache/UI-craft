"use client";

import { useAppContext } from "@/app/ContextApi";

const DeleteModal = () => {
    const {deleteModalObject:{openDeleteModal}} = useAppContext();
  return (
    <div style={{visibility:openDeleteModal ? "visible" :"hidden"}} className={`w-[40%] max-sm:[90%] absolute p-8 px-9 border border-slate-100 bg-white shadow-md top-1/2 left-[50%]`}>DeleteModal</div>
  )
}

export default DeleteModal