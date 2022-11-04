import React from "react";
import styled from "styled-components";
import { Label as LabelIcon } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BLUE_GREY_VERY_LIGHT } from "../../utilites/Colors";
import { IconButton } from "@mui/material";

const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;

  padding-inline-start: 1em;
  padding-inline-end: 0.5em;

  --border-radius: 1rem;
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

  //hides options button unless list item is hovered;
  & > [data-label-options-button] {
    visibility: hidden;
  }

  &:hover {
    cursor: pointer;
    background-color: ${BLUE_GREY_VERY_LIGHT};

    & > [data-label-options-button] {
      visibility: visible;
    }
  }
`;

const StyledLabelIcon = styled(LabelIcon)`
  margin-inline-start: 0.5rem;
`;

const SidebarLabelItem = ({ label }) => {
  return (
    <Container>
      <StyledLabelIcon fontSize="small" />
      <span>{label}</span>
      <IconButton sx={{ marginInlineStart: "auto" }} data-label-options-button>
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </Container>
  );
};

export default SidebarLabelItem;
