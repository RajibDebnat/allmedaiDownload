import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
      // Add your form submission logic here
      alert("Form submitted successfully!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
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
          mt: 4,
        }}
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          required
          error={!!error.email}
          helperText={error.email}
        />

        <TextField
          label="Message"
          variant="outlined"
          value={message}
          onChange={handleMessageChange}
          fullWidth
          required
          multiline
          rows={4}
          error={!!error.message}
          helperText={error.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          sx={{
            height: "48px",
            fontSize: "16px",
            textTransform: "none",
            alignSelf: "center",
            width: { xs: "100%", sm: "50%" },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ConnectPage;
