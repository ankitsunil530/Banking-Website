import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FormData } from '../context/Context';
import axios from 'axios';

const SignUp = () => {
  const { setFormData } = useContext(FormData);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passVisible, setPassVisible] = useState(false);
  const navigate = useNavigate();

  
  const togglePassVisibility = () => {
    setPassVisible(!passVisible);
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // setFormData({ username, name, password });
    // navigate('/display');
    try {
        const response = await axios.post('http://localhost:8000/api/customers/register', {
           
            username,
            name,
            password
          });
          alert('Successfully Registered');
          console.log(response);
          setFormData({ username, name, password });
          navigate('/display');
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to Register');
        setName('');
        setUsername('');
        setPassword('');
    }
    
  };

  
  const handleSwitchToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-gradient-to-b from-indigo-50 to-indigo-100">
      {/* Signup Form */}
      <main className="container p-6 bg-white rounded-lg shadow-lg" style={{ maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Sign Up</h2>

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

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
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
              Sign Up Now
            </button>
          </div>
        </form>

        {/* Login Button */}
        <div className="text-center mt-4">
          <p className="text-gray-700 text-sm">Already have an account?</p>
          <button
            onClick={handleSwitchToLogin}
            className="mt-2 text-blue-500 hover:text-blue-700 font-bold"
          >
            Login Here
          </button>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
