"use client";
import React, { useState } from "react";

function TextInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="flex flex-col rounded-lg shadow-md bg-white p-4">
      <textarea
        className="border rounded p-2 mb-2 w-full text-gray-700"
        rows="4"
        placeholder="Enter your question here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Ask
      </button>
    </div>
  );
}

export default TextInput;
