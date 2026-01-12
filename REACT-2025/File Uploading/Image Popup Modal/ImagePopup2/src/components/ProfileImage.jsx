import { useState } from "react";
import { ImagePopup } from "./ImagePopup";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const ProfileImage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 shadow-xl p-6 items-center gap-4">

        {/* Profile Image */}
        <img
          src={DEFAULT_IMAGE}
          alt="profile"
          onClick={() => setOpen(true)}
          className="w-36 h-36 rounded-full object-cover
          ring ring-primary ring-offset-4
          cursor-pointer hover:scale-105 transition"
        />

        <p className="text-sm text-gray-500">
          Tap image to view
        </p>
      </div>

      {/* Image Popup */}
      <ImagePopup
        open={open}
        onClose={() => setOpen(false)}
        image={DEFAULT_IMAGE}
      />
    </div>
  );
};
