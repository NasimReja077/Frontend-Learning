import React from 'react';

const FormSuccess = ({ formData, navigate }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Success!</h2>
            <p className="mt-2 text-sm text-gray-600">Form submitted successfully.</p>
            <pre className="mt-2 text-sm text-gray-600">{JSON.stringify(formData, null, 2)}</pre>
            <button
              onClick={() => navigate('/')}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Fill Another Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;
