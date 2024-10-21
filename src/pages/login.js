import React, { useState } from "react";
import { TextField, Button, Typography, Box, Divider } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { signInWithGoogle, signInWithEmailPassword } from "../services/firebase"; // Adjust import path if needed
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    signInWithEmailPassword(userName, password)
      .then((user) => {
        setDisplayName(user.userName || "User");
        localStorage.setItem("authToken", user);
        navigate("/manager/manager-profile"); // Navigate to profile after successful login
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Login failed. Please check your username and password."); // Display error
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle().then((user) => {
      setDisplayName(user.displayName);
      localStorage.setItem("authToken", user);
      navigate("/manager/manager-profile");
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "6% auto 0 auto",
        padding: 4,
        textAlign: "center",
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: "#f0f4ff",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Welcome Back!
      </Typography>

      {displayName && (
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Welcome, {displayName}!
        </Typography>
      )}

      <form onSubmit={handleEmailLogin}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          sx={{
            marginY: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#1976d2",
              },
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
              },
            },
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{
            marginY: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#1976d2",
              },
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            paddingY: 1.5,
            marginY: 1,
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Login
        </Button>
      </form>

      <Divider sx={{ marginY: 2 }}>or</Divider>

      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        sx={{
          paddingY: 1.5,
          marginY: 1,
          borderColor: "#db4437",
          color: "#db4437",
          "&:hover": {
            backgroundColor: "#db4437",
            color: "#fff",
          },
        }}
      >
        Login with Google
      </Button>

      <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
        Don't have an account? <Link to="/signup"><Button color="primary">Sign Up</Button></Link>
      </Typography>
    </Box>
  );
}

export default Login;
