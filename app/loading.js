import React from 'react'
import ClockLoader from "react-spinners/ClockLoader";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ClockLoader
        color="#f4f6f5"
        loading
        speedMultiplier={2}
      />
    </div>
  );
}
