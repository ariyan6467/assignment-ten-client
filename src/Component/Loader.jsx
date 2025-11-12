import React from "react";
import { useLoader } from "../Auth/AuthProvider"; // Use the context


const Loader = () => {
  const { loader } = useLoader(); // Access the loading state

  if (!loader) return null; // If not loading, do not render the spinner

  return (
<div className="flex justify-center items-center h-screen bg-black bg-opacity-50 fixed inset-0 z-50">
      <div className="spinner-border animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16">
        loading...
      </div>
    </div>
  );
};

export default Loader;
