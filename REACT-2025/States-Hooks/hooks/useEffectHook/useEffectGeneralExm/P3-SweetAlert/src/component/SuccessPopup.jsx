import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const SuccessPopup = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (trigger) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your action was completed successfully.',
        timer: 2000,
        showConfirmButton: false,
        position: 'top-end',
        toast: true,
      });
    }
  }, [trigger]);

  return (
    <div className="flex justify-center items-center h-40 bg-green-100">
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => setTrigger(!trigger)}
      >
        Show Success Popup
      </button>
    </div>
  );
}; 