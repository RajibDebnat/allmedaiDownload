import React from 'react'

function VideoContent(videoData,key) {
    // const contentVideoData =  
  return (
    videoData.map((data,index) => (
        <Card
          key={key}
          sx={{ display: "flex", maxWidth: "600px", margin: "40px auto" }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={thumbnail}
            alt={title}
          />
          <Box sx={{ display: "flex", flexDirection: "column", padding: "10px" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
            </CardContent>
            <Box>
              <Button
                variant="contained"
                color="primary"
                // onClick={() =>
                //   downloadVideo(data.link, `${title}-${data.qualityLabel}.mp4`)
                // }
              >
               <a  href={data.link}
                download={`${title}-${data.qualityLabel}.mp4`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }} >
                Download {data.qualityLabel}
                </a> 
              </Button>
            </Box>
          </Box>
        </Card>
      ))
  )
}

export default VideoContent