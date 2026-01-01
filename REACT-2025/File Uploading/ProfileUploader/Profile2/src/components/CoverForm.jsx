import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CoverUploader } from "./CoverUploader";

/* ZOD */
const schema = z.object({
  cover: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.type.startsWith("image/"),
      "Only image files allowed"
    )
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "Max file size is 5MB"
    ),
});

export const CoverForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { cover: null, },
    resolver: zodResolver(schema),
  });

  const cover = useWatch({
    control,
    name: "cover",
  });
  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Uploaded cover:", data.cover);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <CoverUploader
          value={cover}
          loading={loading}
          error={errors.cover?.message}
          onChange={(file) => setValue("cover", file, { shouldValidate: true })}
        />

        <button
          type="submit"
          disabled={!cover || loading}
          className="btn btn-primary"
        >
          {loading ? "Uploading..." : "Save Cover Image"}
        </button>
      </form>
    </div>
  );
};
