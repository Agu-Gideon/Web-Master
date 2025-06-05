import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

// Utility function to base64 encode strings
function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

// Login component handles user authentication
const Login = () => {
  // State variables for form fields, loading, and error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handles form submission and authentication logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Prepare payload with base64-encoded credentials
    const payload = {
      tenantId: base64Encode("62504BCF-AB8F-483F-9F46-1B9162607812"),
      username: base64Encode(username),
      password: base64Encode(password),
    };

    try {
      // Send POST request to authentication endpoint
      const response = await fetch("/api/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      // If authentication is successful, store JWT and redirect
      if (response.ok && data.token) {
        sessionStorage.setItem("jwtToken", data.token);
        setLoading(false);
        navigate("/");
      } else {
        // Show error if credentials are invalid
        setError("Invalid credentials. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      // Handle network or server errors
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  // Render the login form and UI
  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Welcome to MDM</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <button className="know-more">Know More</button>
      </div>
      <div className="login-right">
        <h2>Signin</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username ..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>
        {/* Display error message if login fails */}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
