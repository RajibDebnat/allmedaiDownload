import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  useTheme,
} from "@mui/material";
import { styled } from '@mui/system';
import PeopleIcon from "@mui/icons-material/People";
import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
// import missionImage from '../assets/mission.jpg'; // Replace with actual image path
// import teamImage from '../assets/team.jpg'; // Replace with actual image path

// Custom styles
const HeroSection = styled(Box)(({ theme }) => ({
  background: `url(https://via.placeholder.com/1920x500) no-repeat center center/cover`,
  color: "#fff",
  textAlign: "center",
  padding: "80px 20px",
}));

const valuesData = [
  { icon: <PeopleIcon fontSize="large" />, title: "Community", description: "Building a global community" },
  { icon: <VerifiedIcon fontSize="large" />, title: "Trust", description: "Earning trust through transparency" },
  { icon: <SpeedIcon fontSize="large" />, title: "Efficiency", description: "Ensuring fast performance" },
];

// Sample team members data
const teamMembers = [
  { name: "Rajib D.", position: "Founder & CEO", image: "https://via.placeholder.com/150" },
  { name: "Anita P.", position: "Chief Marketing Officer", image: "https://via.placeholder.com/150" },
  { name: "Vikram T.", position: "Lead Developer", image: "https://via.placeholder.com/150" },
];

const AboutUs = () => {
  const theme = useTheme();

  return (
    <div>
      {/* Section 1: Hero Section */}
      <HeroSection>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to Media Downloader
        </Typography>
        <Typography variant="h6" maxWidth="800px" margin="auto">
          Your one-stop solution for downloading media from YouTube, Instagram, and more with ease.
        </Typography>
      </HeroSection>

      {/* Section 2: Our Story */}
      <Container sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Box textAlign="center" marginBottom="40px">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" color="textSecondary" maxWidth="700px" margin="auto">
            Media Downloader was born from the simple idea of making it easier for users to access their favorite media. 
            What started as a small project has now become a trusted tool used by millions worldwide.
          </Typography>
        </Box>
      </Container>

      {/* Section 3: Core Values */}
      <Box sx={{ backgroundColor: theme.palette.grey[100], padding: "40px 20px" }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" marginBottom="40px">
            Our Core Values
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {valuesData.map((value, index) => (
              <Grid item xs={12} sm={4} key={index} textAlign="center">
                <Card sx={{ padding: "20px" }}>
                  {value.icon}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section 4: Meet the Team */}
      <Container sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Box marginBottom="40px">
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ textAlign: "center", padding: "20px" }}>
                  <Avatar
                    alt={member.name}
                    src={member.image}
                    sx={{ width: 120, height: 120, margin: "auto", marginBottom: "15px" }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Section 5: Vision & Mission */}
      <Box sx={{  backgroundSize: "cover", color: "#fff", padding: "60px 20px" }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" color="inherit" gutterBottom>
                To become the leading media downloading platform, providing the best solutions for downloading content across all major social platforms.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="inherit">
                We aim to make the downloading process seamless, fast, and available to everyone. We prioritize user experience and deliver top-tier performance.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 6: Call to Action */}
      <Container sx={{ padding: "40px 0", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Join Us on Our Journey!
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Stay updated with our latest features, tips, and offers.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
          Contact Us
        </Button>
      </Container>
    </div>
  );
};

export default AboutUs;
