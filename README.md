# SyntaxEye

**SyntaxEye** is a web application built using the **MERN** (MongoDB, Express.js, React, Node.js) stack and integrated with **Gemini AI** to analyze and review code. The application provides automated code review feedback, suggestions, and optimizations to enhance code quality.

## Features

- **Automated Code Review**: Uses **Gemini AI** to analyze code and provide suggestions for improvement.
- **Syntax and Error Detection**: Identifies syntax errors and potential issues in the code.
- **Best Practices Enforcement**: Ensures that coding standards and best practices are followed.
- **Code Optimization Suggestions**: Recommends performance improvements and refactoring tips.

## Tech Stack

- **Frontend**: React.js (with Vanilla CSS for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: Gemini AI (via API)
## Installation

### Prerequisites
- **Node.js** (>= 16.x)
- **API Key** for Gemini AI

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Ayush7064/SyntaxEye.git
   cd SyntaxEye
   ```

2. **Install dependencies for the backend and frontend:**
   ```sh
   cd backend
   npm install
   cd ../fullfrontend
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the `backend` directory and add:
     ```ini
     PORT=8080
     GEMINI_KEY=your-gemini-ai-api-key
     ```

4. **Start the backend server:**
   ```sh
   cd backend
   npm start
   ```

5. **Start the frontend application:**
   ```sh
   cd fullfrontend
   npm start
   ```

6. **Open the application** in your browser at `http://localhost:5173`.



### Code Review
- `POST /review` - Submit code for review


## Future Enhancements
- **Support for Multiple Programming Languages**
- **Real-time Code Analysis**
- **AI-Powered Auto Fix Suggestions**
- **Integration with GitHub for PR Reviews**



## Contact
For queries or suggestions, reach out to [ayushkasera7064@gmail.com] or open an issue on **GitHub**.

