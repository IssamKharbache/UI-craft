"use client";
import React from "react";
import Cards from "./main/Cards";
import AllProjects from "./main/AllProjects";
import FavoriteComponents from "./main/FavoriteComponents";
import { useAppContext } from "@/app/ContextApi";
import ComponentPage from "./main/componentpage/ComponentPage";
import MainNavBar from "./NavBar";
import NavBar from "./main/componentpage/NavBar";

const ContentArea = () => {
  const {
    addProjectModelObject: { addModelOpen },
    showComponentPageObject: { showComponentPage },
    deleteModalObject: { openDeleteModal },
    editorObject:{openEditorModal}
  } = useAppContext();

  if (showComponentPage) {
    return (
      <>
        <NavBar />
        <ComponentPage />
      </>
    );
  }
  return (
    <>
      <MainNavBar />
      <div className="w-full bg-slate-50 md:px-8 mt-16 ">
        <Cards />
        <AllProjects />
        <FavoriteComponents />
        {(addModelOpen || openDeleteModal ) && <SoftLayer />}
      </div>
    </>
  );
};

export default ContentArea;

export const SoftLayer = () => {
  const {
    deleteModalObject: { setOpenDeleteModal },
    addProjectModelObject: { setAddModelOpen },
  } = useAppContext();
  return (
    <div
      onClick={() => {
        setOpenDeleteModal(false);
        setAddModelOpen(false);
      }}
      className="w-full h-full fixed top-0 right-0 bg-black opacity-50"
    ></div>
  );
};
