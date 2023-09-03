"use client"

import React from 'react'

export default function error() {
  return (
    <div className="bg-black-500 text-white p-4 rounded-md shadow-md text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-auto mb-4 animate-pulse"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <p className="text-xl font-semibold mb-2">Network Error</p>
      <p className="text-base">
        Unable to connect to the server. Please check your internet connection
        and try again.
      </p>
    </div>
  );
}
