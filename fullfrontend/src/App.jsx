import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Include Prism theme
import "prismjs/components/prism-javascript"; // Import JavaScript syntax highlighting
import "./App.css";
import axios from "axios";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState("Review your code:");
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false); // New state for loading

  useEffect(() => {
    Prism.highlightAll(); // Ensures syntax highlighting works
  }, []);

  async function reviewCode() {
    setLoading(true); // Start loading
    try {
      console.log("Sending request with code:", code);

      const response = await axios.post(
        "http://localhost:8080/review",
        { code }, // Sending the code inside an object
        {
          headers: {
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );

      console.log("Response received:", response.data);
      setReview(response.data); // Store response in state
    } catch (error) {
      console.error("Axios request failed:", error);
      setReview("❌ Error fetching review. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <div className="app">
      <main className="content">
        {/* Left Side: Code Editor */}
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 12,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div
            className={`review ${loading ? "disabled" : ""}`}
            onClick={!loading ? reviewCode : null}
            style={{
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.5 : 1,
            }}
          >
            {loading ? "Reviewing" : "Review"}
          </div>
        </div>

        {/* Right Side: Review Output */}
        <div className="right">
          <div className="markdown-container">
            {loading ? (
              <div className="loader">⏳ Loading review...</div>
            ) : (
              <Markdown
                rehypePlugins={[rehypeHighlight]}

              >
                {review}
              </Markdown>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
