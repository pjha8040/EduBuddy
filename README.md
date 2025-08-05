# EduBuddyAi

**A Local LLM-Powered AI Tutor for Children**

## Description

EduBuddyAi is an innovative educational platform designed to provide personalized learning experiences for children. Leveraging the power of local Large Language Models (LLMs), EduBuddyAi acts as an AI tutor, making learning accessible and engaging from anywhere. This project aims to democratize education by offering an intelligent, interactive, and private learning environment without relying on cloud-based AI services.

## Features

- **Personalized Learning:** Adapts to each child's learning pace and style.
- **Interactive Tutoring:** Engages children with dynamic questions and explanations.
- **Local LLM Integration:** Ensures privacy and offline accessibility by running AI models locally.
- **User-Friendly Interface:** Designed for easy navigation by children and parents.
- **Cross-Platform Accessibility:** Learn from various devices and environments.

## Technologies Used

- **Frontend:** Next.js, React, CSS Modules (or Tailwind CSS/Sass if used)
- **Backend:** Node.js (for API routes in Next.js)
- **AI/ML:** Local Large Language Models (e.g., Llama.cpp, Ollama, or similar frameworks for running LLMs locally)
- **Other:** (Add any other specific libraries, databases, or tools used)

## Setup and Installation

To get EduBuddyAi up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/edubuddy.git
    cd edubuddy
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    ```

3.  **Configure Local LLM:**

    - (Instructions on how to download and set up the specific local LLM, e.g., Ollama, Llama.cpp, including model download and API endpoint configuration.)
    - Ensure your local LLM server is running and accessible.

4.  **Environment Variables:**
    Create a `.env.local` file in the root directory and add necessary environment variables (e.g., API endpoints for the local LLM).

    ```
    # Example:
    NEXT_PUBLIC_LOCAL_LLM_API_URL=http://localhost:11434/api/generate
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    # or yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

Once the application is running, children can interact with the AI tutor through the intuitive interface. They can ask questions, receive explanations, and engage in learning activities powered by the local LLM.

## Contributing

We welcome contributions to EduBuddy! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
