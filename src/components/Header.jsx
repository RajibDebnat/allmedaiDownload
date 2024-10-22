import React from 'react'
import { navLink } from '../constant';
import logo from '../assets/B.png';
// import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import { Link } from '@mui/joy';
import CardMedia from "@mui/material/CardMedia";
function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className=' mb-16' >
        <nav className='  items-center flex justify-between'>

        <div className='  rounded-3xl'>
        <CardMedia
              component="img"
              sx={{ maxWidth:'80px', borderRadius:'50%'}}
              alt={'media download logo'}
              image={logo}
            />
        </div>
        <ul className=' flex gap-20 list-none max-md:hidden'>
           
           {navLink.map((text,inedx)=><Link key={inedx} className=' cursor-pointer font-Open Sans text-xl  font-normal  text-slate-800  no-underline'>{text}</Link>)}
               </ul>
               <IconButton variant="outlined" sx={{display:{xs:'block',md:'none'}}} color="neutral" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
    
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <ListItemButton sx={{ fontWeight: 'lg' }}>Home</ListItemButton>
          <ListItemButton>Saved</ListItemButton>
          <ListItemButton>About Us</ListItemButton>
          <ListItemButton>Contact</ListItemButton>
        </List>
      </Drawer>
        </nav>
        
    </header>
  )
}

export default Header;