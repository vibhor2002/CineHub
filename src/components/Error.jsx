import React from "react";

export default function Error({ error }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Oops! Something Went Wrong</h1>
        <p style={styles.message}>
          {error ? error : "An unexpected error occurred."}
          You have visited an invalid URL. Please click the button below to go
          back to the home page.
        </p>
        <button
          style={styles.button}
          onClick={() => window.location.replace("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    textAlign: "center",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffffff",
    maxWidth: "500px",
    margin: "0 550px",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#dc3545",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1rem",
    color: "#6c757d",
    marginBottom: "1.5rem",
  },
  button: {
    backgroundColor: "rgb(220, 53, 69)",
    color: "#ffffff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
