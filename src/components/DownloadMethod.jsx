import React, { useRef } from "react";
import { Card, Typography } from "@mui/material";
import { Grid } from "@mui/joy";
import { motion, useInView } from "framer-motion";

const videos = [
  {
    platform: "YouTube",
    title: "How to Download YouTube Videos",
    videoUrl: "https://www.youtube.com/embed/7LZ0MTkNr34",
  },
  {
    platform: "Instagram",
    title: "How to Download Instagram Videos",
    videoUrl: "https://www.youtube.com/embed/cJoMfLl1Qjw",
  },
];

function DownloadMethod() {
  return (
    <div style={{ padding: "20px", marginTop: '7rem' }}>
      <Typography variant="h4"  gutterBottom>
        How to Download Videos
      </Typography>

      <Grid container spacing={4}>
        {videos.map((video, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true }); // Trigger only once

          return (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
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
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default DownloadMethod;
