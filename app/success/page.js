"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { withRouter } from "next/router";

const SuccessMessage = () => {
  const router = useRouter();

  useEffect(() => {
    // Display the success message using react-hot-toast
    const successMessage = () => {
      toast.success("Success! Redirecting to the home page...");
    };

    // Delay the redirection to the home page
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    successMessage();

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div>

      <h1>Success Message</h1>
    </div>
  );
};

export default SuccessMessage;
