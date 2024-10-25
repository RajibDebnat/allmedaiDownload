import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { performance, flexible, responsiveDesign, noMoney } from "../tools";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const features = [
  {
    image: performance,
    title: "Fast Performance",
    description: "Experience lightning-fast load times.",
  },
  {
    image: responsiveDesign,
    title: "Responsive Design",
    description: "Optimized for all devices.",
  },
  {
    image: noMoney,
    title: "Free to Use",
    description: "No cost to start, free forever.",
  },
  {
    image: flexible,
    title: "Customizable",
    description: "Easily adapt it to fit your needs.",
  },
];

export default function FeatureCards() {
  const theme = useTheme();
  // Media query for extra small screens (below 600px)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // Media query for very small screens (below 382px)
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down(382));

  return (
    <Grid container spacing={2} sx={{ marginTop: "7rem" }}>
      {features.map((feature, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3} // Set 4 columns on medium screens and above
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center", // Center on smaller screens
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row", // Stack cards vertically on small screens
              maxWidth: "100%",
              alignItems: "center", // Center content inside the card
              textAlign: isSmallScreen ? "center" : "left", // Center text on small screens
              padding: "1rem",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 100,
                height: 100,
                margin: "0 auto", // Center the image
              }}
              image={feature.image}
              alt={feature.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
