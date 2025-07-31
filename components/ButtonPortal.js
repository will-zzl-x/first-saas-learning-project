"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonPortal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBilling = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.post("/api/billing/create-portal");

      const portalUrl = response.data.url;

      window.open(portalUrl, "_blank");
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
