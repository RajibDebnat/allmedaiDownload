import axios from "axios";

const apiKey = " 23777cfec1msh0ca5bf572f74b6fp1625b7jsn9f9941c9a825"; // Replace with your actual RapidAPI key

export const fetchData = async (url) => {
  try {
    const response = await axios.get(
      `https://social-media-video-downloader.p.rapidapi.com/smvd/get/all?url=${encodeURIComponent(
        url
      )}`,
      {
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "social-media-video-downloader.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response data:", response.data); // Log successful response
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status code out of the 2xx range
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error("No response received:", error.request);
    } else {
      // Some other error occurred during request setup
      console.error("Error setting up request:", error.message);
    }
  }
};

// Call the function with a video URL
