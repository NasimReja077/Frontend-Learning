import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiCamera, FiTrash2 } from "react-icons/fi";

/* ---------------- CONSTANT ---------------- */
const DEFAULT_IMAGE =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";

/* ---------------- ZOD ---------------- */
const schema = z.object({
  avatar: z
    .instanceof(File)
    .refine((f) => f.type.startsWith("image/"), {
      message: "Only image files allowed",
    })
    .refine((f) => f.size <= 2 * 1024 * 1024, {
      message: "Max image size is 2MB",
    }),
});

/* ---------------- COMPONENT ---------------- */
export const ProfileImageUploader = () => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onDrop = useCallback(
    (files) => {
      const file = files[0];
      if (!file) return;

      setPreview(URL.createObjectURL(file));
      setValue("avatar", file, { shouldValidate: true });
      clearErrors("avatar");
    },
    [setValue, clearErrors]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  const handleDelete = () => {
    setPreview(null);
    setValue("avatar", undefined);
  };

  const onSubmit = async (data) => {
    setLoading(true);

    // simulate upload
    await new Promise((res) => setTimeout(res, 2000));

    console.log("Uploaded:", data.avatar);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-100 rounded-2xl shadow-xl p-8 w-90
        flex flex-col items-center gap-5"
      >
        <h2 className="text-xl font-semibold">Profile Photo</h2>

        {/* Avatar */}
        <div className="relative group">
          <div {...getRootProps()} className="cursor-pointer relative">
            <input {...getInputProps()} />

            <div
              className={`w-40 h-40 rounded-full overflow-hidden
              ring-4 ring-primary ring-offset-4
              transition ${
                loading ? "blur-sm" : ""
              }`}
            >
              <img
                src={preview || DEFAULT_IMAGE}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Spinner Overlay */}
            {loading && (
              <div
                className="absolute inset-0 flex items-center justify-center
                bg-black/40 rounded-full"
              >
                <span className="loading loading-spinner loading-lg text-white"></span>
              </div>
            )}

            {/* Hover Camera */}
            {!loading && (
              <div
                className="absolute inset-0 flex items-center justify-center
                bg-black/30 rounded-full opacity-0
                group-hover:opacity-100 transition"
              >
                <FiCamera className="text-white text-3xl" />
              </div>
            )}
          </div>

          {/* Delete */}
          {preview && !loading && (
            <button
              type="button"
              onClick={handleDelete}
              className="absolute -top-2 -right-2
              btn btn-error btn-circle btn-xs"
            >
              <FiTrash2 />
            </button>
          )}
        </div>

        {/* Error */}
        {errors.avatar && (
          <p className="text-error text-sm text-center">
            {errors.avatar.message}
          </p>
        )}

        <p className="text-xs text-gray-500 text-center">
          JPG / PNG • Max 2MB
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={!preview || loading}
          className="btn btn-primary w-full"
        >
          {loading ? "Uploading..." : "Save Photo"}
        </button>
      </form>
    </div>
  );
};
