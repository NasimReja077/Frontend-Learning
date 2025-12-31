import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiX } from "react-icons/fi";

export const DropZone = () => {
  const [state, setState] = useState([]);

  const removeImage = (index) => {
    setState((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Image Upload
      </h1>

      <DropZoneComponent setState={setState} />

      {state.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {state.map((file, i) => (
            <div
              key={i}
              className="relative border rounded-lg overflow-hidden shadow-sm group"
            >
              {/* Remove Button */}
              <button
                onClick={() => removeImage(i)}
                className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full
                opacity-0 group-hover:opacity-100 transition"
              >
                <FiX size={16} />
              </button>

              {/* Image */}
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-full h-40 object-cover"
              />

              {/* Info */}
              <div className="p-2 text-sm text-gray-600">
                <p className="truncate">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DropZoneComponent = ({ setState }) => {
  const onDrop = useCallback(
    (files) => {
      setState(files);
    },
    [setState]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center
      border-2 border-dashed rounded-xl p-10 text-center
      transition cursor-pointer
      ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <input {...getInputProps()} />

      <FiUploadCloud size={42} className="text-gray-400 mb-3" />

      {isDragActive ? (
        <p className="text-blue-600 font-medium">
          Drop the images here...
        </p>
      ) : (
        <>
          <p className="text-gray-700 font-medium">
            Drag & drop images here
          </p>
          <p className="text-sm text-gray-500">
            or click to browse (PNG, JPG, JPEG)
          </p>
        </>
      )}
    </div>
  );
};
