import React, { useState, useRef } from "react";
import Input from "@mui/joy/Input";
import { Button, Typography, Box } from "@mui/joy";
import { motion, useInView } from "framer-motion";

const SignUpForm = function () {
  const scriptURL = "https://script.google.com/macros/s/AKfycbyAP8isQHqM_M3UUbdJfDTvquq1txnZd0KvuJaajRlYPfcHO2UTZgHSMSNBgzk8dc9J/exec"; // Replace with your Google Apps Script URL
  
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleEmailInput = (event) => {
    setEmailValue(event.target.value);
    setEmailError("");
    setSuccessMessage("");
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleNewsletterSignup = async () => {
    if (!emailValue.trim()) {
      setEmailError("Please enter your email.");
      return;
    }

    if (!validateEmail(emailValue)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Send email data to Google Sheets
    const formData = new FormData();
    formData.append("email", emailValue);

    try {
      const response = await fetch(scriptURL, { method: "POST", body: formData });
      if (response.ok) {
        setSuccessMessage("Thank you for subscribing!");
        setEmailValue("");
      } else {
        setEmailError("There was an issue with the subscription. Please try again.");
      }
    } catch (error) {
      console.error("Error!", error);
      setEmailError("There was an error connecting to the server. Please try again.");
    }
  };

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{ fontSize: { xs: "28px", md: "36px" }, fontWeight: "bold" }}
      >
        Stay Connected with Us!
      </Typography>
      <Typography
        variant="body1"
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        sx={{ fontSize: { xs: "16px", md: "18px" }, marginBottom: "20px" }}
      >
        Get the latest updates, tips, and guides straight to your inbox. Sign up
        for our newsletter and never miss out!
      </Typography>

      <Input
        component={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        value={emailValue}
        onChange={handleEmailInput}
        type="email"
        name="email"
        placeholder="Enter your email for updates"
        endDecorator={
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-flex" }}
          >
            <Button onClick={handleNewsletterSignup}>Subscribe</Button>
          </motion.div>
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
      {successMessage && (
        <Typography color="primary" variant="body2" sx={{ marginTop: "8px" }}>
          {successMessage}
        </Typography>
      )}
    </Box>
  );
};

export default SignUpForm;
