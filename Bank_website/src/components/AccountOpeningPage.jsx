import React from "react";
import { useNavigate} from "react-router-dom";
import Header from "./Header";

const AccountOpeningPage = () => {
  const navigate = useNavigate();

  return (
    
   
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-indigo-50 to-indigo-100">
     
      <main className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Account Opening</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
              Customer Name:
            </label>
            <input
              type="text"
              id="customerName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address:
            </label>
            <textarea
              id="address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City:
            </label>
            <input
              type="text"
              id="city"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your city"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Go to Login
            </button>
          </div>
        </form>
      </main>

      {/* Footer Section */}
      
    </div>
    
  );
};

export default AccountOpeningPage;
