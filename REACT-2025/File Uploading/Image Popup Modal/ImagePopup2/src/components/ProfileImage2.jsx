import ModalImage from "react-modal-image";

const DEFAULT_IMAGE =
  "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const ProfileImage2 = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 shadow-xl p-6 items-center gap-4">

        {/* Image Popup */}
        <ModalImage
          small={DEFAULT_IMAGE}
          large={DEFAULT_IMAGE}
          alt="Profile Image"
          hideDownload
          hideZoom
          className="w-36 h-36 rounded-full object-cover
          ring ring-primary ring-offset-4 cursor-pointer"
        />

        <p className="text-sm text-gray-500">
          Tap image to view
        </p>
      </div>
    </div>
  );
};
