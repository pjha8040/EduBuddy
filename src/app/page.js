"use client";
import Image from "next/image";
import TextInput from "@/components/TextInput";
import ImageUpload from "@/components/ImageUpload";
import ResponseBox from "@/components/ResponseBox";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (question) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: question }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data.text);
    } catch (error) {
      console.error("Error calling API:", error);
      setResponse(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            EduBuddy AI Tutor
          </h1>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <TextInput onSend={handleSend} />
              <ImageUpload onSend={handleSend} />
              <ResponseBox response={response} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
