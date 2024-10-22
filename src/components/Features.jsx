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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(382));
  return (
    <Grid container spacing={2}>
      {features.map((feature, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              maxWidth: "100%",
              justifyContent: isSmallScreen && "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 100 ,margin:"0 auto"}}
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
