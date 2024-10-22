import React from 'react';
import {  Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/joy';
import CardMedia from '@mui/material/CardMedia';

import tiktok from '../assets/vecteezy_tiktok-png-icon_16716450-removebg.png'
function ShowCase() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <div style={{ backgroundColor: '#1976d2', padding: '5px', borderRadius: '50%' }}>
          <YouTubeIcon style={{ color: 'white', fontSize: 40 }} />
        </div>
        <Typography style={{ color: 'black', textAlign: 'center' }}>YouTube</Typography>
      </Grid>
      <Grid item>
      <div style={{ backgroundColor: '#1976d2', padding: '5px', borderRadius: '60%' }}>
          <FacebookIcon style={{ color: 'white', fontSize: 40 }} />
        </div>
        <Typography style={{ color: 'black', textAlign: 'center' }}>Facebook</Typography>
      </Grid>
      <Grid item>
      <div style={{ backgroundColor: '#1976d2', padding: '5px', borderRadius: '50%' }}>
          <InstagramIcon style={{ color: 'white', fontSize: 40 }} />
        </div>
        <Typography style={{ color: 'black', textAlign: 'center' }}>Instagram</Typography>
      </Grid>
      <Grid item>
      <div style={{ backgroundColor: '#1976d2', padding: '5px', borderRadius: '50%' ,width:"100%"}}>
      <CardMedia
            component="img"
           sx={{width:"40px"}}
            alt={"tiktok Logo"}
            image={tiktok}
          />
        </div>
        <Typography style={{ color: 'black', textAlign: 'center' }}>TikTok</Typography>
      </Grid>
    </Grid>
  );
}

export default ShowCase;
