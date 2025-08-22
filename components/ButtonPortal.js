"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonPortal = () => {
  const [isLoading, setIsLoading] = useState(false);

  // create a portal session. Ignore is loading if it's already loading.

  const handleBilling = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.post("/api/billing/create-portal");
      const { url } = response.data;

      window.location.href = url;
      setIsLoading(false);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error || error.message || "An error occurred";

      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={() => handleBilling()}>
      {isLoading && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
      Billing
    </button>
  );
};

export default ButtonPortal;
