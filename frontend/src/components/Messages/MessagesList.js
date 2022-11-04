import React from "react";
import styled from "styled-components";
import MessagesListItem from "./MessagesListItem";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Container = styled.div``;

const MessagesList = () => {
  return (
    <Container>
      <MessagesListItem sender="short name" />
      <MessagesListItem sender="very very very long name" />
      <MessagesListItem sender="Ryan Cahela" />
      <MessagesListItem sender="Ryan" />
    </Container>
  );
};

export default MessagesList;
