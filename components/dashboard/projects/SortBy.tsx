import { KeyboardArrowDown } from "@mui/icons-material";
import React from "react";

const SortBy = () => {
  return (
    <div className="flex justify-between mt-8">
      <p>
        You have <span className="text-red-400 font-bold">3</span> projects
      </p>
      <div className="flex gap-2 items-center">
        <span>Sort By :</span>
        <div className="text-red-400 font-bold flex gap-1 items-center">
            <span>Name</span>
            <KeyboardArrowDown  className="text-[13px]"/>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
