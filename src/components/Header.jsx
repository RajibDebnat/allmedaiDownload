import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/joy/Link"; // Import Link from Material UI Joy
import logo from "../assets/B.png";
import { navLink } from "../constant";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mb-16">
      <nav className="items-center flex justify-between">
          <Link
            to={'/'}
            className="cursor-pointer font-Open Sans text-xl font-normal text-slate-800 no-underline"
          >
        <div className="rounded-3xl">
            <CardMedia
              component="img"
              sx={{ maxWidth: "80px", borderRadius: "50%" }}
              alt={"media download logo"}
              image={logo}
            />
        </div>
          </Link>
        <ul className="flex gap-20 list-none max-md:hidden">
          {navLink.map((item, index) => (
            <li key={index}>
              <Link
                component={RouterLink} // Use react-router-dom's Link as the component
                to={item.path}
                className="cursor-pointer font-Open Sans text-xl font-normal text-slate-800 no-underline"
              >
                {item.text}
              </Link>
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
                <Link component={RouterLink} to={item.path}>
                  {item.text}
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </nav>
    </header>
  );
}

export default Header;
