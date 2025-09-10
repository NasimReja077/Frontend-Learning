import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => (
  <div className="flex flex-col justify-center items-center h-screen space-y-4 animate-pulse">
    <FaExclamationTriangle className="text-red-500 text-6xl" />
    <p className="text-red-500 text-xl font-bold">An error occurred. Please try again later.</p>
  </div>
);

export default Error;
