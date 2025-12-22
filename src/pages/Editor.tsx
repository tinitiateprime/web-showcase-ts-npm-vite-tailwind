import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { FaPlay, FaSyncAlt, FaMoon, FaSun } from "react-icons/fa";

const EditorPage: React.FC = () => {
  const [language, setLanguage] = useState<"javascript" | "typescript" | "html" | "css">("javascript");
  const [code, setCode] = useState<string>("console.log('Hello, world!');");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [output, setOutput] = useState<string>("");

  // Reset code templates for different languages
  const resetCode = () => {
    switch (language) {
      case "javascript":
        setCode("console.log('Hello, world!');");
        break;
      case "typescript":
        setCode("const greet: string = 'Hello, world!';\nconsole.log(greet);");
        break;
      case "html":
        setCode(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Preview</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is live preview.</p>
</body>
</html>`);
        break;
      case "css":
        setCode(`body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
}
h1 {
  color: #007bff;
}`);
        break;
    }
  };

  // Evaluate JS/TS code output
  const runCode = () => {
    if (language === "javascript" || language === "typescript") {
      try {
        // eslint-disable-next-line no-new-func
        const result = new Function(code)();
        setOutput(String(result ?? "Code executed"));
      } catch (err: any) {
        setOutput("Error: " + err.message);
      }
    } else {
      setOutput("Run preview available only for JS/TS.");
    }
  };

  // For HTML/CSS live preview, render iframe content
  const renderPreview = () => {
    if (language === "html") {
      return (
        <iframe
          title="Live Preview"
          sandbox="allow-scripts allow-same-origin"
          srcDoc={code}
          style={{ width: "100%", height: "400px", border: "1px solid #ddd", borderRadius: 4 }}
        />
      );
    } else if (language === "css") {
      const htmlContent = `
        <!DOCTYPE html>
        <html><head><style>${code}</style></head>
        <body>
          <h1>CSS Preview</h1>
          <p>This text is styled with your CSS.</p>
        </body>
        </html>`;
      return (
        <iframe
          title="CSS Preview"
          sandbox="allow-scripts allow-same-origin"
          srcDoc={htmlContent}
          style={{ width: "100%", height: "400px", border: "1px solid #ddd", borderRadius: 4 }}
        />
      );
    }
    return null;
  };

  // Map language to CodeMirror language extensions
  const languageExtension = () => {
    switch (language) {
      case "javascript":
      case "typescript":
        return javascript({ jsx: false, typescript: language === "typescript" });
      case "html":
        return html();
      case "css":
        return css();
    }
  };

  // Toggle theme light/dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Reset code when language changes
  useEffect(() => {
    resetCode();
    setOutput("");
  }, [language]);

  return (
    <Container fluid className={`py-4 bg-${theme === "light" ? "light" : "dark"} text-${theme === "light" ? "dark" : "light"}`}>
      <Row className="mb-3 align-items-center">
        <Col xs={12} md={6}>
          <h2 className="mb-0">🖥️ Rich Online Editor</h2>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-md-end gap-2 mt-3 mt-md-0">
          <Form.Select
            aria-label="Select Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            style={{ maxWidth: 150 }}
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </Form.Select>
          <Button variant="secondary" onClick={resetCode} title="Reset code">
            <FaSyncAlt />
          </Button>
          <Button variant={theme === "light" ? "dark" : "light"} onClick={toggleTheme} title="Toggle Theme">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </Button>
          {(language === "javascript" || language === "typescript") && (
            <Button variant="primary" onClick={runCode} title="Run Code">
              <FaPlay /> Run
            </Button>
          )}
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <CodeMirror
            value={code}
            height="400px"
            theme={theme === "light" ? "light" : "dark"}
            extensions={[languageExtension()]}
            onChange={(value) => setCode(value)}
            style={{
              borderRadius: 6,
              border: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
            }}
          />
        </Col>
        <Col md={6}>
          <h5>Output / Preview</h5>
          <div
            className={`p-3 border rounded bg-${theme === "light" ? "white" : "secondary"}`}
            style={{ minHeight: 400, overflow: "auto" }}
          >
            {language === "html" || language === "css" ? (
              renderPreview()
            ) : (
              <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{output}</pre>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditorPage;
