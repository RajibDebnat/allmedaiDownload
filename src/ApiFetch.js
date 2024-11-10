import axios from 'axios';

const apiKey = 'b6131b9df9mshcd77884b6a03fe6p14d712jsnadea9ca1c6d3'; // Replace with your actual RapidAPI key

export const fetchData = async (url) => {
  try {
    const response = await axios.get(
      `https://social-media-video-downloader.p.rapidapi.com/smvd/get/all?url=${encodeURIComponent(url)}`, 
      {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'social-media-video-downloader.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        withCredentials: true // Equivalent to xhr.withCredentials = true
      }
    );

    console.log('Response data:', response.data); // Log the API response
    return response.data; // Return the API response
  } catch (error) {
    console.error('Error fetching data:', error.response?.data || error.message); // Log any errors
  }
};

// Call the function with a video URL

