import React from "react";
import styled from "styled-components";
import AppsIcon from "@mui/icons-material/Apps";
import { IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-inline-start: auto;
`;

const ProfilePicture = styled.div`
  aspect-ratio: 1 / 1;
  width: 2rem;
  border-radius: 1000px;
  background-color: tomato;
`;

const HeaderRight = () => {
  return (
    <Container>
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
      <IconButton>
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton>
        <AppsIcon />
      </IconButton>
      <ProfilePicture />
    </Container>
  );
};

export default HeaderRight;
