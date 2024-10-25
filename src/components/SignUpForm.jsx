import React, { useState } from "react";
import Input from "@mui/joy/Input"; // Correct import
import LinkIcon from "@mui/icons-material/Link";
import { Button, Typography, Box } from "@mui/joy";

const SignUpForm = function ({ handleSubmit }) {
 
  const [emailValue, setEmailValue] = useState(""); // State for email input

  const [emailError, setEmailError] = useState("");



  const handleEmailInput = (event) => {
    setEmailValue(event.target.value);
    setEmailError(""); // Clear the error when user types
  };



  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    return emailPattern.test(email);
  };

  

  const handleNewsletterSignup = () => {
    if (!emailValue.trim()) {
      setEmailError("Please enter your email.");
      return;
    }

    if (!validateEmail(emailValue)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Handle newsletter signup
    console.log("Newsletter email submitted:", emailValue);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontSize: { xs: "28px", md: "36px" }, fontWeight: "bold" }}
      >
        Stay Connected with Us!
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "16px", md: "18px" }, marginBottom: "20px" }}
      >
        Get the latest updates, tips, and guides straight to your inbox. Sign up
        for our newsletter and never miss out!
      </Typography>

      {/* Newsletter Signup */}
      <Input
        value={emailValue}
        onChange={handleEmailInput}
        type={"email"}
        name="email"
        placeholder="Enter your email for updates"
        endDecorator={
          <Button onClick={handleNewsletterSignup}>Subscribe</Button>
        }
        sx={{
          margin: "auto",
          width: { xs: "90%", md: "600px" },
          "--Input-radius": "28px",
          "--Input-placeholderOpacity": 0.7,
          "--Input-minHeight": "52px",
          "--Input-decoratorChildHeight": "40px",
        }}
      />
      {emailError && (
        <Typography color="error" variant="body2" sx={{ marginTop: "8px" }}>
          {emailError}
        </Typography>
      )}
    </Box>
  );
};

export default SignUpForm;
