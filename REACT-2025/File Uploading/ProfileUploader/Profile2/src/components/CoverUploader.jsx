import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiCamera, FiTrash2 } from "react-icons/fi";

const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200";

export const CoverUploader = ({
  value,
  onChange,
  error,
  loading,
}) => {
  const [preview, setPreview] = useState(
    value ? URL.createObjectURL(value) : null
  );

  const onDrop = useCallback(
    (files) => {
      const file = files[0];
      if (!file) return;

      setPreview(URL.createObjectURL(file));
      onChange(file);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  const removeCover = () => {
    setPreview(null);
    onChange(undefined);
  };

  return (
    <div className="space-y-3">
      {/* Cover Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl group">

        {/* Dropzone */}
        <div
          {...getRootProps()}
          className="relative h-64 sm:h-72 md:h-80 cursor-pointer"
        >
          <input {...getInputProps()} />

          {/* Image */}
          <img
            src={preview || DEFAULT_COVER}
            alt="cover"
            className={`w-full h-full object-cover transition duration-300
              ${loading ? "scale-105 blur-sm" : "group-hover:scale-105"}`}
          />

          {/* Glass Overlay */}
          {!loading && (
            <div
              className={`absolute inset-0 backdrop-blur-sm bg-black/30
              flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition`}
            >
              <div className="flex items-center gap-3 text-white text-lg font-semibold">
                <FiCamera size={24} />
                {isDragActive ? "Drop image here" : "Change cover photo"}
              </div>
            </div>
          )}

          {/* Spinner */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <span className="loading loading-spinner loading-lg text-white"></span>
            </div>
          )}
        </div>

        {/* Floating Action Buttons */}
        {preview && !loading && (
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              type="button"
              className="btn btn-sm btn-circle bg-base-100 shadow-lg"
              {...getRootProps()}
            >
              <FiCamera />
            </button>

            <button
              type="button"
              onClick={removeCover}
              className="btn btn-sm btn-circle btn-error shadow-lg"
            >
              <FiTrash2 />
            </button>
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="text-error text-sm font-medium">
          {error}
        </p>
      )}

      {/* Hint */}
      <p className="text-xs text-gray-500">
        Recommended size: <b>1200×300</b> • JPG / PNG • Max 5MB
      </p>
    </div>
  );
};
