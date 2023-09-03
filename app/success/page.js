"use client"

import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast("Purchase Successful", {
    duration: 3000,
  });
};

export default function Page() {
  notify();

  return (
    <div>
      <Toaster />
    </div>
  );
}
