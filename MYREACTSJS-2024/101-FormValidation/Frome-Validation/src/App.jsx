import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import FormSuccess from './components/FormSuccess';

const App = () => {
  const [route, setRoute] = useState(window.location.pathname);
  const [formData, setFormData] = useState(null);

  const handleNavigation = (path, data = null) => {
    window.history.pushState({}, '', path);
    setRoute(path);
    if (data) setFormData(data);
  };

  window.onpopstate = () => {
    setRoute(window.location.pathname);
  };

  return (
    <div>
      {route === '/' && <FormComponent navigate={handleNavigation} />}
      {route === '/success' && <FormSuccess formData={formData} navigate={handleNavigation} />}
    </div>
  );
};

export default App;
