"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const FormNewBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    try {
      const data = await axios.post("/api/board", { name });

      setName("");

      toast.success("Board created:");

      router.refresh();
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Create a new feedback board</p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Board Name</span>
        </div>
        <input
          required
          type="text"
          placeholder="Future Famous Blog"
          className="input input-bordered w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <button className="btn btn-primary w-full" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create Board
      </button>
      {/* 1. INPUT */}
      {/* 2. FORM */}
      {/* 3. BUTTON */}
    </form>
  );
};

export default FormNewBoard;

// This component is a placeholder for the form to create a new board.
// It should be implemented with a form that allows users to input the board name
// and submit it to the server to create a new board.
