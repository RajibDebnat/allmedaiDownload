import React, { useState } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom"; // Import NavLink and Link from react-router-dom
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import CardMedia from "@mui/material/CardMedia";
import logo from "../assets/B.png";
import { navLink } from "../constant";
import { motion } from 'framer-motion';

// Custom motion Link for animation on click
const MotionNavLink = motion(NavLink);

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mb-16">
      <nav className="items-center flex justify-between">
        <div className="rounded-3xl">
          <NavLink
            to={'/'}
            className="cursor-pointer font-Open Sans font-normal text-slate-800 no-underline"
          >
            <CardMedia
              component="img"
              sx={{ maxWidth: "80px", borderRadius: "50%" }}
              alt={"media download logo"}
              image={logo}
            />
          </NavLink>
        </div>
        <ul className="flex gap-20 list-none max-md:hidden">
          {navLink.map((item, index) => (
            <li key={index}>
              <MotionNavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer font-Open Sans text-lg font-normal ${
                    isActive ? "text-blue-600" : "text-slate-800"
                  } no-underline  transition-shadow duration-300`
                }
                whileHover={{ scale: 1.1 }} // Scale on hover
                whileTap={{ scale: 0.95 }} // Slightly shrink on tap
                transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
              >
                {item.text}
              </MotionNavLink>
            </li>
          ))}
        </ul>
        <IconButton
          variant="outlined"
          sx={{ display: { xs: "block", md: "none" } }}
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              ml: "auto",
              mt: 1,
              mr: 2,
            }}
          >
            <Typography
              component="label"
              htmlFor="close-icon"
              sx={{ fontSize: "sm", fontWeight: "lg", cursor: "pointer" }}
            >
              Close
            </Typography>
            <ModalClose id="close-icon" sx={{ position: "initial" }} />
          </Box>

          <List
            size="lg"
            component="nav"
            sx={{
              flex: "none",
              fontSize: "xl",
              "& > div": { justifyContent: "center" },
            }}
          >
            {navLink.map((item, index) => (
              <ListItemButton key={index}>
                <MotionNavLink
                  to={item.path}
                  whileHover={{ scale: 1.1 }} // Scale on hover
                  whileTap={{ scale: 0.95 }} // Slightly shrink on tap
                  transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
                >
                  {item.text}
                </MotionNavLink>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </nav>
    </header>
  );
}

export default Header;
