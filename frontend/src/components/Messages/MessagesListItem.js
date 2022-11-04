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
import { GREY_MEDIUM } from "../../utilites/Colors";
import { InsertChartOutlinedTwoTone } from "@mui/icons-material";

const Container = styled.ul`
  display: flex;
  align-items: center;
  padding-inline: 0.5em;
  font-weight: 700;

  &:hover {
    box-shadow: inset 0 0 1px ${GREY_MEDIUM}, inset 0 -1px 1px ${GREY_MEDIUM},
      inset 0 1px 1px ${GREY_MEDIUM};
  }
`;

const SubjectLine = MUIStyled(Typography)({
  flexBasis: "40ch",
  marginInlineStart: "auto",
  fontWeight: "inherit",
});

const Sender = MUIStyled(Typography)({
  flexBasis: "15ch",
  fontWeight: "inherit",
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
