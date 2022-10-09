import React from "react";
import { HeaderMain, Logo, Menu, Social } from "./Header.styled";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import menu from "./menu.json";
import { Link, MenuItem } from "@mui/material";

function Header() {
  return (
    <HeaderMain>
      <Logo>Nicat Adgozalli</Logo>
      <Menu>
        {menu.map((item) => {
          return (
            <MenuItem sx={{ fontSize: 17 }} key={item.id}>
              <Link sx={{ textDecoration: "none" }} href={item.link}>
                {item.name}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
      <Social>
        <InstagramIcon />
        <YouTubeIcon />
        IMDB
      </Social>
    </HeaderMain>
  );
}

export default Header;
