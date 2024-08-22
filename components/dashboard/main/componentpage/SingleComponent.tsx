import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CodeIcon from "@mui/icons-material/Code";
import PreviewIcon from "@mui/icons-material/Preview";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import SyntaxHighlighter from "react-syntax-highlighter"
import { atelierCaveDark, atelierCaveLight, atelierSulphurpoolDark, atelierSulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useAppContext } from "@/app/ContextApi";
import { Component } from "@/localData";
const SingleComponentPage = ({component}: {component: Component}) => {
  const [tabMenu, setTabMenu] = useState([
    {
      id: 1,
      icon: <PreviewIcon />,
      name: "Preview",
      isSelected: true,
    },
    {
      id: 2,
      icon: <CodeIcon />,
      name: "JSX",
      isSelected: false,
    },
  ]);

  const changeTabState = (index: number) => {
    setTabMenu((prevTabMenu) => {
      return prevTabMenu.map((singleTab, i) => {
        return i === index
          ? { ...singleTab, isSelected: true }
          : { ...singleTab, isSelected: false };
      });
    });
  };

  return (
    <div className="flex flex-col gap-4 px-4 py-7 bg-red-100/80  m-4 rounded">
      {/* title and favorited icon  */}
      <div className="flex gap-2 justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">{component.name}</h1>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
        <MoreVertIcon className="cursor-pointer" />
      </div>
      {/* preview and jsx */}
      <div className="flex gap-4 rounded-xl max-w-md">
        {tabMenu.map((tab, index) => (
          <div onClick={()=>changeTabState(index)} className={`flex gap-2 items-center  py-2 px-4 rounded-full cursor-pointer ${tab.isSelected ? "bg-red-300 text-white " :"hover:bg-red-100 text-black"}`} key={index}  >
            {tab.icon}
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      {/* component preview or jsx */}
     {
        tabMenu[0].isSelected ? (
           <div className="w-full border-2 border-red-200 rounded-xl mt-6">
            <LiveProvider code={component.code} noInline={false}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <LiveError className="rounded-lg text-red-600 border-gray-200" />
                    <LivePreview className="rounded-lg border-gray-200 p-4" />
                </div>

            </LiveProvider>
           </div>
        ) : (
            <div className="border rounded-md mt-6 w-full">
                <SyntaxHighlighter language="javascript" style={atelierCaveLight} wrapLongLines={true}>{component.code}</SyntaxHighlighter>
            </div>
        )
     }
    </div>
  );
};

export default SingleComponentPage;



