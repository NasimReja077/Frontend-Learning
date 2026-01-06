import { useState } from "react";
import { ImagePopup } from "./ImagePopup";

const DEFAULT_IMAGE =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";

export const ProfileImage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 shadow-xl p-6 items-center gap-4">

        {/* Avatar */}
        <img
          src={DEFAULT_IMAGE}
          alt="profile"
          onClick={() => setShowPopup(true)}
          className="w-36 h-36 rounded-full object-cover
          ring ring-primary ring-offset-4
          cursor-pointer hover:scale-105 transition"
        />

        <p className="text-sm text-gray-500">
          Tap image to view
        </p>
      </div>

      {/* Popup */}
      {showPopup && (
        <ImagePopup
          image={DEFAULT_IMAGE}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};
