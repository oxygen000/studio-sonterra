import React from "react";

export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Unauthorized</h1>
        <p className="text-gray-600 mt-4">
          You do not have permission to access this page.
        </p>
        <a href="/admin/login" className="text-blue-500 mt-4 inline-block">
          Go to Login
        </a>
      </div>
    </div>
  );
}
