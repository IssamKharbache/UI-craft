import { useRef, useState } from "react";
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

const ComponentEditor = () => {
  const [code, setCode] = useState(`
        <div>
        <h1 className="text-red-400">Default Component</h1>
        </div>
        `);
  //
  const aceEditor = useRef<AceEditor | null>(null);
  //
  const {
    editorObject: { openEditorModal, setOpenEditorModal },
  } = useAppContext();
  const handleChange = () => {};
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
              <Checkbox icon={<FavoriteBorder />} sx={{ fontSize: 20 }} />
            </div>
          </div>
          {/* input */}
          <div className="flex gap-3">
            <input
              placeholder="Enter Component name"
              className="w-full border-2 border-red-200 rounded-lg px-4 py-2"
            />
          </div>
        </div>
        {/* input code */}
        <div className="flex flex-col gap-2 pt-6 px-8  ">
          <div className="flex justify-between">
            {/* input label */}
            <span className="flex gap-1 items-center text-[13px]">
              <Code className="text-[15px] font-bold" />
              <span>Jsx code</span>
            </span>
            <button className="bg-red-200 hover:bg-red-300/80 transition p-3 rounded-full flex items-center justify-centers">
              <FaSave className="size-4" />
            </button>
          </div>
          <div className="border border-slate-200 rounded-md relative mt-1">
            <AceEditor
              ref={aceEditor}
              mode="jsx"
              theme=""
              name="jsxEditor"
              value={code}
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
