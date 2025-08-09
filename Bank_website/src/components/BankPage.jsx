import React from "react";
import { useNavigate } from "react-router-dom";

const BankPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-indigo-50 to-indigo-100">
      {/* Header Section */}
       
      {/* Banner and Content Section */}
      <main className="container mx-auto my-1">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Banner Image */}
          <div className="lg:col-span-3 bg-gradient-to-r from-indigo-400 to-blue-500 p-1 rounded-lg shadow-lg">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/3/AR/PE/MA/51586886/sbi-kiosk-banking.jpg"
              alt="Banner"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          {/* Scrolling News */}
          <div className="bg-yellow-200 p-4 h-64 overflow-hidden rounded-lg shadow-lg">
            <marquee behavior="scroll" direction="up" scrollamount="3">
              <p className="text-blue-900 font-bold">Latest news and updates from SBI...</p>
              <p className="text-blue-900 font-bold">New Fixed Deposit schemes available now!</p>
              <p className="text-blue-900 font-bold">Apply for personal loans with low interest rates.</p>
            </marquee>
          </div>
        </div>

        {/* Bank Information */}
        <div className="my-10 p-6 bg-white rounded-lg shadow-lg">
          <p className="text-xl mb-4 text-gray-700">
            Welcome to <span className="font-bold text-blue-700">SBI Bank</span>, the most trusted bank in India. We offer a wide range of banking services and financial products that cater to the needs of individuals and businesses. Experience world-class banking with SBI.
          </p>
          <ul className="list-disc ml-8 text-gray-600">
            <li>Safe and secure savings accounts</li>
            <li>Attractive interest rates on fixed deposits</li>
            <li>Quick and easy loan approvals</li>
            <li>Comprehensive credit card options</li>
          </ul>
        </div>

        {/* Services Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-pink-300 to-pink-500 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3347/3347971.png"
                alt="Saving A/C"
                className="mx-auto w-20 h-20 mb-4 rounded-full border-4 border-white shadow-lg"
              />
              <p className="text-white text-lg font-semibold">Savings Account</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYE2Kz1RKFlnVxEoWf42_tk3xH3H1L-7bYLA&s"
                alt="Fixed Deposit"
                className="mx-auto w-20 h-20 mb-4 rounded-full border-4 border-white shadow-lg"
              />
              <p className="text-white text-lg font-semibold">Fixed Deposit</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-green-300 to-green-500 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://t3.ftcdn.net/jpg/05/63/00/96/360_F_563009614_0Pfnd5c4fWwWgAUfhXoQkfOX4XSi78Ba.jpg"
                alt="Credit Cards"
                className="mx-auto w-20 h-20 mb-4 rounded-full border-4 border-white shadow-lg"
              />
              <p className="text-white text-lg font-semibold">Credit Cards</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-coin-in-hand-loan-logo-vector-png-image_5089557.png"
                alt="Loan"
                className="mx-auto w-20 h-20 mb-4 rounded-full border-4 border-white shadow-lg"
              />
              <p className="text-white text-lg font-semibold">Loans</p>
            </div>
          </div>
        </section>
      </main>  
    </div>
  );
};

export default BankPage;
