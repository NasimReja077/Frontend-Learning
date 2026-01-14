import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { FiEdit3, FiSend, FiSave, FiRefreshCw } from "react-icons/fi";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleReset = () => {
    setTitle("");
    setValue("");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
          <FiEdit3 className="text-blue-400" />
          What’s Markdown Editor Today?
        </h1>

        {/* Post Title */}
        <div>
          <label className="text-sm text-gray-300 mb-1 block">
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Markdown Editor */}
        <div data-color-mode="dark">
          <label className="text-sm text-gray-300 mb-2 block">
            Post Content
          </label>

          <MDEditor
            value={value}
            onChange={setValue}
            height={450}
            preview="live"        // live | edit | preview
            textareaProps={{
              placeholder: "Write your markdown content here...",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-end">
          <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
            <FiSave />
            Save Draft
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            <FiRefreshCw />
            Reset
          </button>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg">
            <FiSend />
            Create Post
          </button>
        </div>

      </div>
    </div>
  );
};
