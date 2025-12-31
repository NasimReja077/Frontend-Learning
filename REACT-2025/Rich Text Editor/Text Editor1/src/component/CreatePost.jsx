import { useRef, useState } from "react";
import { FiEdit3, FiEye, FiSend, FiSave, FiRefreshCw } from "react-icons/fi";
import JoditEditor from 'jodit-react';
import DOMPurify from "dompurify";

export const CreatePost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const editor = useRef(null);
  DOMPurify.sanitize(content);
  const handleReset = () => {
    setContent("");
    setTitle("");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
          <FiEdit3 className="text-blue-400" />
          What’s going on your mind?
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
          <JoditEditor 
          ref={editor}
          value={content}
          onChange={newContent => setContent(newContent)}
          />
        </div>

        {/* Preview */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h2 className="text-gray-300 text-sm flex items-center gap-2 mb-2">
            <FiEye />
            Post Preview
          </h2>

          {content ? (
            <>
              <p className="text-gray-400 whitespace-pre-wrap">
                {content || "Post content preview will appear here"}
              </p>
            </>
          ) : (
            <p className="text-gray-500 italic">
              Start writing to see the preview...
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-end">
          <button
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
          >
            <FiSave />
            Save Draft
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition"
          >
            <FiRefreshCw />
            Reset
          </button>

          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition"
          >
            <FiSend />
            Create Post
          </button>
        </div>

      </div>
    </div>
  );
};

