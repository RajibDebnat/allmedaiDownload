import React from 'react'
import Box from "@mui/material/Box";
import { Button, useMediaQuery } from "@mui/material";
function DownloadButton({keyIndex,link,downloadLink,quality}) {
  return (
    <Box  key={keyIndex} sx={{margin:'5px auto'}}>
    <Button variant="contained" color="primary">
       <a
         href={link}
         download={downloadLink}
         target="_blank"
         rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
       >
         Download {quality}
       </a>
     </Button>
   </Box>
  )
}

export default DownloadButton