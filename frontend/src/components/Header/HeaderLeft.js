import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderLeft = () => {
  return (
    <Container>
      <IconButton>
        <MenuIcon />
      </IconButton>

      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
        alt="gmail logo"
      />
    </Container>
  );
};

export default HeaderLeft;
