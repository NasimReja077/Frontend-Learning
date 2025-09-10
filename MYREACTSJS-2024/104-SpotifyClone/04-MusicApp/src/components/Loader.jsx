import React from 'react';

import { loader } from '../assets';

const Loader = ({ title }) => (
<div className="flex flex-col justify-center items-center h-screen space-y-4">
  <img src={loader} alt="loader..." className="w-50 h-50" />
  <h1 className="text-white text-3xl">{title || 'Loading'}</h1>
</div>
);
export default Loader;