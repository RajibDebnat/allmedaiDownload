import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery } from "@mui/material";
import image from "../assets/B.png";
import { Download } from "@mui/icons-material";
import DownloadButton from "./DownloadButton";
import SelectLabels from "./SelectLabels";

export default function MediaControlCard({
  thumbnail = image,
  title = "Live From Space",
  links = [],
  errorMessage,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(862));
  const [category, setCategory] = React.useState('');
  // Filter for YouTube-like data (with both audio and video)
  const videoData = links.filter(
    (video) => video.hasAudio === true && video.hasVideo === true
  );
  const audio = links.filter(
    (video) => video.hasAudio === true && video.hasVideo === false
  );
  console.log(audio);
  console.log(category)
  // Filter for Instagram-like data
  const instagramData = links.filter((video) => video.quality && video.link);
  console.log(instagramData);
  console.log(thumbnail);
  console.log(title);

  return (
    <>
      {videoData.length > 0 && (
        <Card
          sx={{
            boxSizing: "border-box",
            maxWidth: { xs: "90%", md: "900px" },
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            margin: "40px auto",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: isSmallScreen ? "100%" : "400px" }}
            alt={title}
            image={thumbnail}
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "10px" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
           
              <SelectLabels setCategory={setCategory}  category={category}/>
          
              <Typography component="div" variant="h5">
                {title.slice(0, 50) + "..."}
              </Typography>
            </CardContent>
            {/* category=== '' || category==="video" */}
            { category=== '' || category==="video"?  videoData.map((data, index) => (
              <DownloadButton
              keyIndex={`youtube-${data.videoCodec}-${index}`}
                link={data.link}
                quality={data.qualityLabel}
                downloadLink={`${title}-${data.qualityLabel}.mp4`}
              />
            )): audio.map((data, index) => (
              <DownloadButton
              keyIndex={`youtube-${data.videoCodec}-${index}`}
                link={data.link}
                quality={data.qualityLabel}
                downloadLink={`${title}-${data.qualityLabel}.mp4`}
              />
            ))}
            <Typography
              variant="p"
              sx={{ fontSize: "14px", fontWeight: "normal", color: "gray" }}
            >
              YouTube video may take some time. Keep patience While Loading!
            </Typography>
          </Box>
        </Card>
      )}

      {videoData.length === 0 && (
        <Card
          sx={{
            boxSizing: "border-box",
            maxWidth: { xs: "90%", md: "900px" },
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            margin: "40px auto",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: isSmallScreen ? "100%" : "400px" }}
            alt={title.slice(0, 150) + "..."}
            image={thumbnail}
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "10px" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {title.slice(0, 50) + "..."}
              </Typography>
            </CardContent>
            {instagramData.map((data, index) => (
              <DownloadButton
              keyIndex={`instagram-${data.quality}-${index}`}
                link={data.link}
                quality={data.qualityLabel || data.quality}
                downloadLink={`${title}.mp4`}
              />
            ))}
          </Box>
        </Card>
      )}
    </>
  );
}
