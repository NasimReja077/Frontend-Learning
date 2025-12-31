import { useState } from "react";
import { FiEdit3, FiEye, FiSend, FiSave, FiRefreshCw } from "react-icons/fi";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
export const CreatePost = () => {
  const [state, setState] = useState("");
  const mdParser = new MarkdownIt();

  // This function can convert File object to a datauri string
  const onImageUpload = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
          <FiEdit3 className="text-blue-400" />
          What’s Markdown Editor Today?
        </h1>

        {/* Post Title */}
        <div>
          <label className="text-sm text-gray-300 mb-1 block">Post Title</label>
          <input
            type="text"
            placeholder="Enter post title"
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Post Content */}
        <div>
          <label className="text-sm text-gray-300 mb-1 block">
            Post Content
          </label>
          {/* <textarea
            placeholder="Write your post content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          /> */}
          <MdEditor
            style={{
              height: "500px",
              width: "100%",
            }}
            onImageUpload={onImageUpload}
            value={state}
            onChange={({ text }) => setState(text)}
            renderHTML={(text) => mdParser.render(text)}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-end">
          <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition">
            <FiSave />
            Save Draft
          </button>

          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition">
            <FiRefreshCw />
            Reset
          </button>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition">
            <FiSend />
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};
