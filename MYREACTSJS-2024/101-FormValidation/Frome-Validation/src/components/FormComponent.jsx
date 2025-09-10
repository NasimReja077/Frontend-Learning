import React, { useState } from 'react';

// Validators
const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const panValidator = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const aadhaarValidator = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;

const countries = {
  India: ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Bengaluru', 'Kota'],
  USA: ['New York', 'Los Angeles', 'Chicago', 'Phoenix', 'San Diego'],
  Japan: ['Tokyo', 'Kyoto', 'Osaka', 'Gifu', 'Mito']
};

const FormComponent = ({ navigate }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadhaarNo: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
      case 'username':
        errorMessage = value.trim() === '' ? 'This field is required.' : '';
        break;
      case 'email':
        errorMessage = !emailValidator.test(value) ? 'Invalid email address.' : '';
        break;
      case 'password':
        errorMessage = !passwordValidator.test(value) ? 'Password must be at least 8 characters and include A-Z, a-z, and 0-9.' : '';
        break;
      case 'phoneNo':
        errorMessage = value.trim() === '' ? 'This field is required.' : '';
        break;
      case 'country':
        errorMessage = value === '' ? 'This field is required.' : '';
        break;
      case 'city':
        errorMessage = value === '' ? 'This field is required.' : '';
        break;
      case 'panNo':
        errorMessage = !panValidator.test(value) ? 'Invalid PAN number.' : '';
        break;
      case 'aadhaarNo':
        errorMessage = !aadhaarValidator.test(value) ? 'Invalid Aadhaar number.' : '';
        break;
      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [name]: errorMessage,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = Object.values(formErrors).some((error) => error !== '');
    if (!hasError) {
      navigate('/success', formData);
    } else {
      console.log('Form has errors. Cannot submit.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Register Form Validation</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Please fill in the information below to create your account.</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formErrors.firstName && <p className="mt-2 text-sm text-red-600">{formErrors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formErrors.lastName && <p className="mt-2 text-sm text-red-600">{formErrors.lastName}</p>}
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formErrors.username && <p className="mt-2 text-sm text-red-600">{formErrors.username}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formErrors.email && <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {formErrors.password && <p className="mt-2 text-sm text-red-600">{formErrors.password}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phoneNo"
                name="phoneNo"
                type="text"
                placeholder="+91 1234567890"
                value={formData.phoneNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formErrors.phoneNo && <p className="mt-2 text-sm text-red-600">{formErrors.phoneNo}</p>}
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a country</option>
                {Object.keys(countries).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {formErrors.country && <p className="mt-2 text-sm text-red-600">{formErrors.country}</p>}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                disabled={!formData.country}
              >
                <option value="">Select a city</option>
                {formData.country &&
                  countries[formData.country].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
              {formErrors.city && <p className="mt-2 text-sm text-red-600">{formErrors.city}</p>}
            </div>

            {/* PAN Number */}
            <div>
              <label htmlFor="panNo" className="block text-sm font-medium text-gray-700">
                PAN Number
              </label>
              <input
                id="panNo"
                name="panNo"
                type="text"
                value={formData.panNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formErrors.panNo && <p className="mt-2 text-sm text-red-600">{formErrors.panNo}</p>}
            </div>

            {/* Aadhaar Number */}
            <div>
              <label htmlFor="aadhaarNo" className="block text-sm font-medium text-gray-700">
                Aadhaar Number
              </label>
              <input
                id="aadhaarNo"
                name="aadhaarNo"
                type="text"
                value={formData.aadhaarNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formErrors.aadhaarNo && <p className="mt-2 text-sm text-red-600">{formErrors.aadhaarNo}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
