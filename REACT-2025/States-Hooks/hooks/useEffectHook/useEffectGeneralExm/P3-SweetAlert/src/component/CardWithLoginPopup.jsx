import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const CardWithLoginPopup = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (trigger) {
      Swal.fire({
        title: 'Login',
        html: `
          <input type="text" id="username" class="swal2-input" placeholder="Username">
          <input type="password" id="password" class="swal2-input" placeholder="Password">
        `,
        confirmButtonText: 'Sign In',
        confirmButtonColor: '#3b82f6',
        showCancelButton: true,
        cancelButtonColor: '#ef4444',
        focusConfirm: false,
        preConfirm: () => {
          const username = Swal.getPopup().querySelector('#username').value;
          const password = Swal.getPopup().querySelector('#password').value;
          if (!username || !password) {
            Swal.showValidationMessage('Please enter both username and password');
          }
          return { username, password };
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Logged In!',
            text: `Welcome, ${result.value.username}!`,
          });
        }
      });
    }
  }, [trigger]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://plus.unsplash.com/premium_photo-1724646533438-912b1b2ec822?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
          alt="Card Image"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Sample Card</h2>
          <p className="text-gray-600 mb-4">
            This is a sample card with some content. Click the button below to log in and read more.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setTrigger(!trigger)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}; 