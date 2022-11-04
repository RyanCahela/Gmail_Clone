import React from "react";
import styled from "styled-components";
import { Icon, IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const RightSidebarIndex = () => {
  return (
    <Container>
      <IconButton>
        <CalendarMonthIcon />
      </IconButton>
      <IconButton>
        <EmojiObjectsOutlinedIcon />
      </IconButton>
      <IconButton>
        <TaskAltOutlinedIcon />
      </IconButton>
      <IconButton>
        <PersonIcon />
      </IconButton>
      <IconButton>
        <AddIcon />
      </IconButton>
    </Container>
  );
};

export default RightSidebarIndex;
