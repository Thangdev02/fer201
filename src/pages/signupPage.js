import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://670f94ee3e71518616588d3a.mockapi.io/user";

function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages
    setSuccess(false); // Reset success state

    try {
      // Send POST request to create a new user
      const response = await axios.post(API_URL, {
        userName,
        password,
        role: "role 1", // You can modify this role as needed
        createdAt: new Date().toISOString(), // Set current time as createdAt
      });
      console.log("User created:", response.data);
      setSuccess(true); // Set success state
      // Optionally, navigate to login or home page after successful signup
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err);
      setError("Signup failed. Please try again."); // Set error message
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 3,
        textAlign: "center",
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Signup successful! Please login.</Alert>}

      <form onSubmit={handleSignup}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          sx={{ marginY: 1 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ marginY: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ paddingY: 1, marginY: 1 }}
        >
          Sign Up
        </Button>
      </form>

      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Already have an account?{" "}
        <Button color="primary" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Typography>
    </Box>
  );
}

export default Signup;
