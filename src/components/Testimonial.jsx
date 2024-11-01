import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { testimonials } from "../constant";
import { settings } from '../tools.js';
import { motion } from "framer-motion";

function TestimonialSlider() {
  return (
    <Box sx={{ width: { xs: "90%", md: "80%" }, margin: "auto", padding: "20px" }}>
      {/* Inline CSS for black arrows */}
      <style>
        {`
          .slick-prev:before, .slick-next:before {
            color: black; /* Change arrow color to black */
            font-size: 20px; /* Adjust arrow size */
          }
        `}
      </style>

      <Typography
        variant="h4"
        sx={{
          margin: "40px 0",
          color: "#636b74",
          fontWeight: 'bold',
          textAlign: "center"
        }}
      >
        Why Users Love Our Video Downloader
      </Typography>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }} // Adding delay for staggered effect
          >
            <Card
              sx={{
                maxWidth: 300,
                margin: "0 auto",
                boxShadow: 2,
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#f9f9f9", // Light background for contrast
                transition: "transform 0.3s, box-shadow 0.3s", // Transition for hover effect
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                  boxShadow: 5,
                },
              }}
            >
              <CardContent>
                <Typography sx={{ fontStyle: "italic", color: "#555", mb: 1 }}>
                  {testimonial.feedback}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                  {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Slider>
    </Box>
  );
}

export default TestimonialSlider;
