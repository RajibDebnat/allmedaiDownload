import React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import { Typography } from '@mui/joy';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function HowToDownload() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(562)) 

  return (
    <>
<Typography 
  variant="h1" 
  sx={{
    marginTop: '80px', 
    fontSize: isSmallScreen ? '1.8rem' : '3rem'
  }}
>
  How To Download
</Typography>

    <Stepper sx={{ width: '100%' }}>
    <Step
      orientation="vertical"
      indicator={
          <StepIndicator variant="solid" color="neutral">
          1
        </StepIndicator>
      }
      >
        Paste Url
    </Step>
    <Step
      orientation="vertical"
      indicator={<StepIndicator variant="outlined">2</StepIndicator>}
      >
      Search
    </Step>
    <Step orientation="vertical" indicator={<StepIndicator>3</StepIndicator>}>
  Download
    </Step>
  </Stepper>
        </>
  )
}

export default HowToDownload