import React from "react";

const SuccessPage = () => {
  return (
    <div className="success-page  min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-lg transform scale-105 hover:scale-100 transition-transform duration-500">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">
          Art Purchased Successfully
        </h2>
        <p className="text-gray-600">Thank you for your purchase!</p>
      </div>
    </div>
  );
};

export default SuccessPage;
