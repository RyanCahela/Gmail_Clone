import React from "react";
import styled from "styled-components";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
      <AppsIcon />
      <NotificationsIcon />
      <ProfilePicture />
    </Container>
  );
};

export default HeaderRight;
