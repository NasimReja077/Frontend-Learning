import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const DropZone = () => {
  const [state, setState] = useState([]);
  return (
    <div>
      <h1>Hello React Drop Zone.</h1>

      <DropZoneComponent setState={setState} />

      <div className="mt-4 flex gap-4 flex-wrap">
        {state &&
          state.length > 0 &&
          state.map((c, i) => {
            return (
              <img
                key={i}
                src={URL.createObjectURL(c)}
                width={400}
                height={200}
                alt="preview"
                className="rounded"
              />
            );
          })}
      </div>
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
  });
  return (
    <>
      <div
        className="border-2 border-dashed border-gray-300 p-4 cursor-pointer"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
};
