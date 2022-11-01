import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { SIDEBAR_WIDTH } from "../../utilites/Constants";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: ${SIDEBAR_WIDTH};
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
