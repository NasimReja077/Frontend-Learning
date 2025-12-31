import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { FiUploadCloud, FiX } from "react-icons/fi";

export const DropZone = () => {
  const { handleSubmit, setValue } = useForm();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  // Remove image
  const removeImage = () => {
    setImage(null);
    setProgress(0);
    setValue("image", null);
  };

  // Fake upload progress
  const startUpload = () => {
    setProgress(0);
    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 200);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6"
    >
      <h1 className="text-2xl font-semibold text-center mb-6">
        Single Image Upload
      </h1>

      <DropZoneComponent
        setImage={setImage}
        setValue={setValue}
        startUpload={startUpload}
      />

      {image && (
        <div className="mt-4 relative border rounded-lg overflow-hidden">
          {/* Remove Button */}
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full"
          >
            <FiX size={16} />
          </button>

          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="w-full h-48 object-cover"
          />

          <div className="p-2 text-sm text-gray-600">
            <p className="truncate">{image.name}</p>
            <p className="text-xs text-gray-500">
              {(image.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>

          {/* Progress Bar */}
          {progress > 0 && (
            <div className="h-2 bg-gray-200">
              <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      )}

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

const DropZoneComponent = ({ setImage, setValue, startUpload }) => {
  const onDrop = useCallback(
    (files) => {
      const file = files[0]; // ONLY ONE IMAGE
      setImage(file);
      setValue("image", file);
      startUpload();
    },
    [setImage, setValue, startUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false, // 🔒 Only one file
    accept: { "image/*": [] },
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center
      border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
      ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <input {...getInputProps()} />
      <FiUploadCloud size={40} className="text-gray-400 mb-2" />

      <p className="text-gray-700 font-medium">
        Drag & drop an image here
      </p>
      <p className="text-sm text-gray-500">
        Only one image allowed
      </p>
    </div>
  );
};
 