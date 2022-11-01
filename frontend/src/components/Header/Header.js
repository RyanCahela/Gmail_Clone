import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const HeaderLeft = styled.div``;

const HeaderMiddle = styled.div``;

const HeaderRight = styled.div``;

const Header = () => {
  return (
    <header className="header">
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </header>
  );
};

export default Header;
