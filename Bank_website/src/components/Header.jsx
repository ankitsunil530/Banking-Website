// import React,{Link} from 'react'
import { useNavigate,NavLink } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    
       
    <header className="bg-pink-700 text-white p-6 shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-30">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHkoDcwMPjY1daJNzH7hPCc2o2lk12jrAvg&s"
              alt="SBI Bank Logo"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="text-4xl font-extrabold tracking-wide text-yellow-300 ">SBI Bank</h1>
          </div>
          {/* Menu */}
          <nav className="space-x-6 text-lg font-semibold">
            <NavLink
              to="/"
              className="hover:text-yellow-300 transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-yellow-300 transition-colors"
            >
              About Us
            </NavLink>
            <button
              onClick={() => navigate("/login")} // Navigate to Account Opening page
              className="hover:text-yellow-300 transition-colors"
            >
              Login
            </button>
          </nav>
        </div>
      </header> 

          
      
    
  )
}

export default Header;