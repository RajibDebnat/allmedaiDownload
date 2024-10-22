import React, { useState } from "react";
import Input from "@mui/joy/Input"; // Correct import
import LinkIcon from "@mui/icons-material/Link";
import { Button, Typography } from "@mui/joy";

const PreMadeInput = function ({ handleSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
    setError(''); // Clear the error when the user types
  };

  const validateUrl = (url) => {
    const urlPattern = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/; // Simple regex for URL validation
    return urlPattern.test(url);
  };

  const handleSearch = () => {
    // console.log(inputValue)
    if (!inputValue.trim()) {
      setError('Please enter a URL.');
      return;
    }

    if (!validateUrl(inputValue)) {
      setError('Please enter a valid URL format (e.g., http://example.com).');
      return;
    }

    handleSubmit(inputValue); // Call the submit function if the URL is valid
  };

  return (
    <div className=" mt-9">
      <Input
        value={inputValue}
        onChange={handleInput}
        type={"url"}
        placeholder="Paste URL…"
        startDecorator={<LinkIcon />}
        endDecorator={<Button onClick={handleSearch}>Search</Button>}
        sx={{
          margin: "auto",
          width: {xs:"90%",md:"600px"},
          "--Input-radius": "28px",
          "--Input-placeholderOpacity": 0.7,
          "--Input-minHeight": "52px",
          "--Input-decoratorChildHeight": "40px",
        }}
      />
      {error && (
        <Typography color="error" variant="body2" sx={{ marginTop: "8px" }}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default PreMadeInput;
