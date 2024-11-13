import React, { useState } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import Input from "@mui/joy/Input";

const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ email: "", message: "" });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzNCdAtxP9h5XcG10pv9wi0fipVUaW_NWpBKRt1C4SCJ2-mBHqUMsrP4LDr-hf8NAML/exec";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError((prev) => ({ ...prev, email: "" }));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setError((prev) => ({ ...prev, message: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { email: "", message: "" };
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Message is required.";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        console.log("Email:", email, "Message:", message);

        const response = await fetch(scriptURL, {
          method: "POST",
          body: new URLSearchParams({ email, message }),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setEmail("");
          setMessage("");
        }
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          fontWeight: "bold",
          WebkitBackgroundClip: "text",
          color: "#2479dc",
        }}
      >
        Connect With Us
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        We'd love to hear from you! Fill out the form below to reach out.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Official Email: email@gmail.com
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Input
            placeholder="Enter your email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            sx={{
              "--Input-radius": "28px",
              "--Input-placeholderOpacity": 0.7,
              "--Input-minHeight": "52px",
            }}
          />
          {error.email && (
            <Typography color="error" variant="caption">
              {error.email}
            </Typography>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="textarea"
              placeholder="Your Message"
              value={message}
              onChange={handleMessageChange}
              name="message"
              style={{
                width: "100%",
                minHeight: "150px", // Adjust the height to make it look more like a text area
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: error.message ? "1px solid red" : "1px solid #ccc",
                resize: "vertical",
                fontFamily: "inherit",
                "--Input-placeholderOpacity": 0.7,
              }}
            />
            {error.message && (
              <Typography color="error" variant="caption">
                {error.message}
              </Typography>
            )}
          </motion.div>

          {error.message && (
            <Typography color="error" variant="caption">
              {error.message}
            </Typography>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            fullWidth
            sx={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Send Message
          </Button>
        </motion.div>

        {submitSuccess && (
          <Typography color="success.main" align="center">
            Message sent successfully!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ConnectPage;
