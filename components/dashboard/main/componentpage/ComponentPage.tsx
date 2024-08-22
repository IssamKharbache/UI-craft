"use client";
import { useAppContext } from "@/app/ContextApi";
import SingleComponentPage from "./SingleComponent";

const ComponentPage = () => {
  const {
    showComponentPageObject: { setShowComponentPage, showComponentPage },
  } = useAppContext();
  return (
    <div className="flex flex-col gap-4 overflow-auto max-h-[830px]">
      <SingleComponentPage />
      <SingleComponentPage />
      <SingleComponentPage />
    </div>
  );
};

export default ComponentPage;
