import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ email: "", message: "" });

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
    let errors = { email: "", message: "" };
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
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
          // background: "linear-gradient(to right, #4A90E2, #9013FE)",
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
        Official Email : email@gmail.com
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
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={!!error.email}
            helperText={error.email}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={handleMessageChange}
            error={!!error.message}
            helperText={error.message}
          />
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
              // background: "linear-gradient(to right, #4A90E2, #9013FE)",
              color: "#fff",
              fontWeight: "bold",
              // "&:hover": { background: "linear-gradient(to right, #9013FE, #4A90E2)" },
            }}
          >
            Send Message
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default ConnectPage;
