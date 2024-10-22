import React from "react";
import { Card, Typography } from "@mui/material";
import { Grid } from "@mui/joy";

const videos = [
  {
    platform: "YouTube",
    title: "How to Download YouTube Videos",
    videoUrl: "https://www.youtube.com/embed/7LZ0MTkNr34", // YouTube embed URL
  },
  {
    platform: "Instagram",
    title: "How to Download Instagram Videos",
    videoUrl: "https://www.youtube.com/embed/cJoMfLl1Qjw", // Use another video as an example
  },
];

function DownloadMethod() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        How to Download Videos
      </Typography>

      <Grid container spacing={4}>
        {videos.map((video, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              style={{
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">{video.title}</Typography>
              <Typography variant="subtitle1">
                Platform: {video.platform}
              </Typography>

              {/* Embed YouTube video */}
              <iframe
                width="100%"
                height="315"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "8px", marginTop: "15px" }}
              ></iframe>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DownloadMethod;
