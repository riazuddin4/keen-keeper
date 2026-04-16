import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-[500] bg-purple-100 mx-auto flex items-center justify-center px-4">

      <div className="flex flex-col items-center text-center">

        
        <div className="text-6xl text-red-500 mt-6 mb-10">
          <FaExclamationTriangle />
        </div>

        
        <h1 className="text-5xl font-bold mb-10 text-gray-800">
          404 - Page Not Found
        </h1>

        
        <p className="text-gray-500 mb-6 max-w-md">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        
        <Link href={"/"}>
          <button className="btn btn-primary mb-10">
            Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
};

export default NotFoundPage;
