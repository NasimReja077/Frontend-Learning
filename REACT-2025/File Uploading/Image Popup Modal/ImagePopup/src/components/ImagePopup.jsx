import { FiX } from "react-icons/fi";

export const ImagePopup = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative max-w-3xl w-[90%]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 btn btn-circle btn-sm bg-base-100"
        >
          <FiX />
        </button>

        {/* Image */}
        <img
          src={image}
          alt="popup"
          className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};
