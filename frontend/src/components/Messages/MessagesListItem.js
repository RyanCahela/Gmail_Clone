import React from "react";
import { styled as MUIStyled } from "@mui/system";
import styled from "styled-components";
import { IconButton, Typography, Grid } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MessageQuickOptions from "./MessageQuickOptions";
import { GREY_LIGHT, GREY_MEDIUM } from "../../utilites/Colors";
import { InsertChartOutlinedTwoTone } from "@mui/icons-material";

const Container = styled.ul`
  display: flex;
  align-items: center;
  padding-inline: 0.5em;
  font-size: 0.875rem;
  font-weight: 700;
  position: relative;

  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);

    color: black;

    & > div {
      display: block;
    }
  }
`;

const SubjectLine = MUIStyled(Typography)({
  flexBasis: "40ch",
  marginInlineStart: "auto",
  fontWeight: "inherit",
  fontSize: "inherit",
});

const Sender = MUIStyled(Typography)({
  flexBasis: "15ch",
  fontWeight: "inherit",
  fontSize: "inherit",
});

const TimeRecieved = styled.div`
  padding-inline-start: 3rem;
`;

const MessagesListItem = ({ sender }) => {
  return (
    <Container>
      <IconButton>
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "inherit" }} />
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
      <MessageQuickOptions />
    </Container>
  );
};

export default MessagesListItem;
