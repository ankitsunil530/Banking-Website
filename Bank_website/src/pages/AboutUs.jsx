import React, { useState } from 'react';

function AboutUs() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you, ${fname} ${lname}, for submitting the form!`);
  }

  return (
    <div className='bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col items-center justify-center text-white'>
      {/* Header Section */}
      <header className='text-center mb-10'>
        <h1 className='text-6xl font-bold mb-4'>About Us</h1>
        <p className='text-lg max-w-2xl mx-auto'>
          Welcome to our SBI Bank portal! We are dedicated to providing seamless banking
          solutions. Here, users can open accounts, manage transactions, and enjoy a secure banking
          experience.
        </p>
      </header>

      {/* Content and Form Section */}
      <div className='bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-6xl flex items-start space-x-8'>
        {/* Content Section */}
        <div className='w-1/2'>
          <h2 className='text-2xl font-semibold mb-4'>Our Services</h2>
          <ul className='list-disc list-inside space-y-2'>
            <li>Open a new bank account with ease.</li>
            <li>Perform secure money withdrawals and deposits.</li>
            <li>Access a range of loan services tailored to your needs.</li>
            <li>Enjoy 24/7 customer support for any assistance.</li>
          </ul>
        </div>

        {/* Form Section */}
        <div className='w-1/2'>
          <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
          <p className='mb-6'>We'd love to hear from you! Please fill out the form below:</p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='flex flex-col'>
              <label htmlFor='firstName' className='font-medium mb-2'>First Name:</label>
              <input
                type='text'
                id='firstName'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder='Enter your first name'
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='lastName' className='font-medium mb-2'>Last Name:</label>
              <input
                type='text'
                id='lastName'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                placeholder='Enter your last name'
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
