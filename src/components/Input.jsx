import React, { useState } from "react";
import Input from "@mui/joy/Input";
import LinkIcon from "@mui/icons-material/Link";
import { Button, Typography } from "@mui/joy";
import { motion } from "framer-motion";

const PreMadeInput = function ({ handleSubmit,searchError }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
    setError(''); // Clear the error when the user types
  };

  const validateUrl = (url) => {
    const urlPattern = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/;
    return urlPattern.test(url);
  };

  const handleSearch = () => {
    if (!inputValue.trim()) {
      setError('Please enter a URL.');
      return;
    }

    if (!validateUrl(inputValue)) {
      setError('Please enter a valid URL format (e.g., http://example.com).');
      return;
    }

    handleSubmit(inputValue);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-9"
    >
      <motion.div whileHover={{ scale: 1.02 }}>
        <Input
          value={inputValue}
          onChange={handleInput}
          type={"url"}
          
          placeholder="Paste URL…"
          startDecorator={<LinkIcon />}
          endDecorator={
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleSearch}>Search</Button>
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
      </motion.div>
      {error && (
        <Typography color="error" variant="body2" sx={{ marginTop: "8px" }}>
          {error}
          {searchError&& 'Server Problem . Please try again letter...'}
        </Typography>
      )}
    </motion.div>
  );
};

export default PreMadeInput;
