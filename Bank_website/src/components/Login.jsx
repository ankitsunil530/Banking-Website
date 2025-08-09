import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FormData } from '../context/Context';

const Login = () => {

  const { setFormData } = useContext(FormData);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passVisible, setPassVisible] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePassVisibility = () => {
    setPassVisible(!passVisible);
  };

  // Handle form submission for normal login (if you need it)
  const handleSubmit = () => {
    const res =login()
  };

  // Navigate to signup form
  const handleSwitchToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-gradient-to-b from-indigo-50 to-indigo-100">
      {/* Login Form */}
      <main className="container p-6 bg-white rounded-lg shadow-lg" style={{ maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Login</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <div className="relative">
              <input
                type={passVisible ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                onClick={togglePassVisibility}
              >
                <FontAwesomeIcon icon={passVisible ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login Now
            </button>
          </div>
        </form>

        {/* Sign Up Button */}
        <div className="text-center mt-4">
          <p className="text-gray-700 text-sm">Don't have an account?</p>
          <button
            onClick={handleSwitchToSignUp}
            className="mt-2 text-blue-500 hover:text-blue-700 font-bold"
          >
            Sign Up Here
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
