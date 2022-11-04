import React from "react";
import { styled as MUIStyled } from "@mui/system";
import styled from "styled-components";
import { IconButton, Typography, Grid } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Container = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`;

const SubjectLine = MUIStyled(Typography)({
  flexBasis: "40ch",
  marginInlineStart: "auto",
});

const Sender = MUIStyled(Typography)({
  flexBasis: "15ch",
});

const TimeRecieved = styled.div`
  padding-inline-start: 3rem;
`;

const MessagesListItem = ({ sender }) => {
  return (
    <Container>
      <IconButton>
        <CheckBoxOutlineBlankIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <StarOutlineIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <LabelOutlinedIcon fontSize="small" />
      </IconButton>
      <Sender noWrap={true}>{sender}</Sender>
      <SubjectLine noWrap={true}>
        Subject Line Subject Line Subject Line Subject Line Subject Line Subject
        Line Subject Line Subject Line Subject Line Subject Line Subject Line
        Subject Line
      </SubjectLine>
      <TimeRecieved>11:32AM</TimeRecieved>
    </Container>
  );
};

export default MessagesListItem;
