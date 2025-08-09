// src/pages/Display.js
import React,{useContext} from 'react';

import { FormData } from '../context/Context';

const Display = () => {
    const {formData}=useContext(FormData);

  return (
    <div className="grid h-screen justify-center bg-gradient-to-b from-indigo-50 to-indigo-100">
      

      {/* Display Form */}
      <main className="mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Submitted Values</h2>
        <p>Username:{formData.username} </p>
        <p>Password:{formData.password} </p>
        
      </main>

      {/* Footer Section */}
      
    </div>
  );
};

export default Display;
