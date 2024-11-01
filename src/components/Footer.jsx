import React from "react";
import { Box, Grid, Typography,  IconButton, Card, CardMedia } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import {Link} from 'react-router-dom'
import logo from '../assets/B.png'
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // Dark background
        color: "#495057", // White text color
        marginTop:'40px',
        borderTop:'1px solid ',
        borderColor:"#495057",
        padding: { xs: "20px", md: "40px" }, // Padding based on screen size
        textAlign: "center",
      }}
    >
      {/* Footer Links */}
      <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: "20px" }}>
        <Grid item xs={8} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Link href="/about-us" color="inherit" underline="none" sx={{ display: "block", marginBottom: "8px" }}>
            About Us
          </Link>
         
          <Link href="/connect" color="inherit" underline="none" sx={{ display: "block", marginBottom: "8px" }}>
            Contact
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Link href="#" color="inherit" underline="none" sx={{ display: "block", marginBottom: "8px" }}>
            Help Center
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: "block", marginBottom: "8px" }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: "block", marginBottom: "8px" }}>
            Privacy Policy
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link to={'/'}>
          <CardMedia
            component="img"
            sx={{ width:  "100px" ,margin:'  auto'}}
            alt='mediadownload logo'
            image={logo}
            />
            </Link>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" target="_blank" color="inherit" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>

          </Box>
         
         
        </Grid>
      </Grid>

      {/* Footer Copyright */}
      <Typography variant="body2" sx={{ marginTop: "20px" }}>
        &copy; {new Date().getFullYear()} media download. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
