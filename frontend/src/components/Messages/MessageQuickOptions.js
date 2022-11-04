import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: max-content;
  inset-block-start: 0;
  inset-inline-end: 0;
  z-index: 1;
  background-color: white;
  padding-inline-start: 1rem;
  display: none;
`;

const MessageQuickOptions = () => {
  return (
    <Container className="message-quick-options">
      <IconButton>
        <ArchiveOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <DeleteOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <DraftsOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <AccessTimeOutlinedIcon fontSize="small" />
      </IconButton>
    </Container>
  );
};

export default MessageQuickOptions;
