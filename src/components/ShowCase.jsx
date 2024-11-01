import React from "react";
import { Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Grid } from "@mui/joy";
import CardMedia from "@mui/material/CardMedia";
import { motion } from "framer-motion"; // Import Framer Motion

import tiktok from "../assets/vecteezy_tiktok-png-icon_16716450-removebg.png";

function ShowCase() {
  // Define animation variants
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.3, duration: 0.5 },
    }),
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {[
        { icon: <FacebookIcon />, label: "Facebook" },
        { icon: <InstagramIcon />, label: "Instagram" },
        {
          icon: (
            <CardMedia
              component="img"
              sx={{ width: "40px" }}
              alt="TikTok Logo"
              image={tiktok}
            />
          ),
          label: "TikTok",
        },
        { icon: <YouTubeIcon />, label: "YouTube" },
      ].map((item, index) => (
        <Grid item key={item.label}>
          <motion.div
            style={{
              backgroundColor: "#1976d2",
              padding: "5px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            custom={index}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          >
            {React.cloneElement(item.icon, {
              style: { color: "white", fontSize: 40 },
            })}
          </motion.div>
          <Typography style={{ color: "black", textAlign: "center" }}>
            {item.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShowCase;
