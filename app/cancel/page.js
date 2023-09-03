// CancelPage.js
import React from "react";

const CancelPage = () => {
  return (
    <div className="cancel-page  min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-lg transform scale-105 hover:scale-100 transition-transform duration-500">
        <h2 className="text-2xl font-semibold mb-4 text-red-400">Order Canceled</h2>
        <p className="text-gray-600">Your order has been canceled.</p>
      </div>
    </div>
  );
};

export default CancelPage;
