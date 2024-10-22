import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { testimonials } from "../constant";
// Testimonials data
import {settings} from '../tools.js'

function TestimonialSlider() {
  

  return (
    <div style={{ width: "80%", margin:'auto'  }}>
      {/* Inline CSS for black arrows */}
      <style>
        {`
          .slick-prev:before, .slick-next:before {
            color: black; /* Change arrow color to black */
            font-size: 20px; /* Adjust arrow size */
          }
        `}
      </style>

      <Typography variant="h4" style={{ margin: "40px 0px", color: "#636b74" , fontWeight:'bold'}}>
        Why Users Love Our Video Downloader
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Card key={index}  sx={{ maxWidth: 300, margin: "0 auto", boxShadow:2 , borderRadius: 2 }}>
            <CardContent>

            {/* Uncomment and add images if needed */}
         <Typography sx={{ fontStyle: "italic", color: "#555", mb: 1 }}>
              {testimonial.feedback}
            </Typography>
            <Typography  sx={{ fontWeight: "bold", color: "#000" }}>{testimonial.name}</Typography>
              </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
