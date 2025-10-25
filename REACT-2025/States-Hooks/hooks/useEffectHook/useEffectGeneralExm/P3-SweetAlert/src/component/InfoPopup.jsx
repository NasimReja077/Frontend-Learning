import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const InfoPopup = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (trigger) {
      Swal.fire({
        icon: 'info',
        title: 'Information',
        text: 'Please enter your details.',
        input: 'text',
        inputPlaceholder: 'Enter your name',
        showCancelButton: true,
        confirmButtonColor: '#3b82f6',
        cancelButtonColor: '#ef4444',
      }).then((result) => {
        if (result.isConfirmed && result.value) {
          Swal.fire(`Hello, ${result.value}!`);
        }
      });
    }
  }, [trigger]);

  return (
    <div className="flex justify-center items-center h-40 bg-blue-100">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => setTrigger(!trigger)}
      >
        Show Info Popup
      </button>
    </div>
  );
};