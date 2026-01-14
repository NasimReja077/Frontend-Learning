import { useState } from "react";
import { FiEdit3, FiSend, FiSave, FiRefreshCw } from "react-icons/fi";
import {MdEditor} from "md-editor-rt";
import "md-editor-rt/lib/style.css";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleReset = () => {
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 py-10 px-4">
      <div className="mx-auto max-w-6xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
          <FiEdit3 className="text-blue-500 text-2xl" />
          <h1 className="text-2xl font-bold text-white">
            Create Post — Markdown Editor
          </h1>
        </div>

        {/* Title Input */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title..."
          className="w-full bg-gray-950 text-white border border-gray-800 rounded-xl px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Markdown Editor */}
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <MdEditor
            modelValue={content}
            onChange={setContent}
            theme="dark"
            previewTheme="dark"
            codeTheme="github-dark"
            language="en-US"
            style={{ height: "600px" }}

            /* 🔥 ALL FEATURES ENABLED */
            toolbarsExclude={[]} // empty = enable everything
            showCodeRowNumber={true}
            autoDetectCode={true}
            autoFoldThreshold={15}
            preview={true}
            htmlPreview={true}
            previewOnly={false}

            /* Footer */
            footers={["markdownTotal", "scrollSwitch"]}

            /* Sticky toolbar */
            toolbarSticky={true}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-end pt-4">
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-xl transition">
            <FiSave /> Save Draft
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-xl transition"
          >
            <FiRefreshCw /> Reset
          </button>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold transition">
            <FiSend /> Publish
          </button>
        </div>
      </div>
    </div>
  );
};
