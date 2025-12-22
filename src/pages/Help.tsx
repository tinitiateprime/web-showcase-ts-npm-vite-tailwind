import React from "react";

const Help: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Page Header */}
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#1d4ed8",
          marginBottom: "1.5rem",
        }}
      >
        Help & Support
      </h1>
      <p
        style={{
          color: "#4b5563",
          textAlign: "center",
          maxWidth: "42rem",
          marginBottom: "2.5rem",
        }}
      >
        Welcome to the Help Center! Here you’ll find answers to common questions,
        quick guides, and ways to contact us if you need further assistance.
      </p>

      {/* FAQ Section */}
      <div style={{ width: "100%", maxWidth: "48rem" }}>
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}
          >
            How do I create an account?
          </h2>
          <p style={{ color: "#4b5563" }}>
            Click on the <span style={{ fontWeight: 500 }}>Sign Up</span> button
            in the top right corner, fill out your details, and you’re ready to
            go!
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}
          >
            I forgot my password. What should I do?
          </h2>
          <p style={{ color: "#4b5563" }}>
            Click on <span style={{ fontWeight: 500 }}>Forgot Password</span> on
            the login page. Enter your email, and we’ll send you reset
            instructions.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}
          >
            How can I contact support?
          </h2>
          <p style={{ color: "#4b5563" }}>
            You can reach us anytime at{" "}
            <a
              href="mailto:support@example.com"
              style={{
                color: "#2563eb",
                fontWeight: 500,
                textDecoration: "underline",
              }}
            >
              support@example.com
            </a>{" "}
            or use the live chat button at the bottom-right of this page.
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <div style={{ marginTop: "2.5rem" }}>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "0.75rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 500,
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#1d4ed8")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#2563eb")
          }
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Help;
