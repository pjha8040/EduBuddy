// pages/api/ask.js

// Import the necessary modules
import { NextApiRequest, NextApiResponse } from "next";

// Define the API route handler
export default async function handler(req, res) {
  // Handle only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Extract the prompt from the request body
  let { prompt } = req.body;

  // Handle empty prompts
  if (!prompt) {
    return res.status(400).json({ error: "Prompt cannot be empty" });
  }

  // Sanitize the prompt
  prompt = sanitizePrompt(prompt);

  try {
    // Call the local Ollama model
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        model: "gemma3n:e4b",
        stream: false,
      }),
    });

    // Handle fetch errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check if the response contains the 'response' field
    if (!data || !data.response) {
      throw new Error("Invalid response from Ollama API");
    }

    const aiText = data.response;

    // Return the AI-generated text to the frontend
    res.status(200).json({ text: aiText });
  } catch (error) {
    // Handle errors during the API call
    console.error("Error calling Ollama API:", error);
    res
      .status(500)
      .json({ error: "Failed to generate text", details: error.message });
  }
}

// Function to sanitize the prompt (example)
function sanitizePrompt(prompt) {
  // Implement your sanitization logic here
  // This is a placeholder - replace with actual sanitization
  return prompt.trim();
}
