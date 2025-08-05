"use client";
import React from "react";

function ResponseBox({ response, isLoading }) {
  return (
    <div className="flex flex-col rounded-lg shadow-md bg-white p-4">
      <h2 className="text-lg font-bold mb-2">Response:</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <p className="text-gray-700">{response}</p>
      )}
    </div>
  );
}

export default ResponseBox;
