"use client";
import React, { useState } from "react";
import { createWorker } from "tesseract.js";

function ImageUpload({ onSend }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setIsProcessing(true);
    setText("");

    const worker = await createWorker();
    try {
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text },
      } = await worker.recognize(file);
      setText(text);
      onSend(text);
    } catch (error) {
      console.error("OCR Error:", error);
      setText("Error during OCR. Please try again.");
    } finally {
      await worker.terminate();
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col rounded-lg shadow-md bg-white p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="mb-2"
        disabled={isProcessing}
      />
      {isProcessing && <div>Processing...</div>}
      {text && (
        <div className="mt-2">
          <h3 className="font-bold mb-1">Extracted Text:</h3>
          <p className="text-gray-700">{text}</p>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
