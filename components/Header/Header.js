import React from "react";
import { HeaderMain, Logo, Menu, Social } from "./Header.styled";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { SiImdb } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";

function Header() {
  return (
    <HeaderMain>
      <Logo>Nicat Adgozalli</Logo>
      <Menu>
        <li>Home</li>
        <li>Qarabağ</li>
        <li>Photo</li>
        <li>Video</li>
        <li>Bio</li>
      </Menu>
      <Social>
        <BsInstagram />
        <AiOutlineYoutube />
        <SiImdb />
      </Social>
    </HeaderMain>
  );
}

export default Header;
