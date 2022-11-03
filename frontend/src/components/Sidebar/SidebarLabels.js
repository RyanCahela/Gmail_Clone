import AddIcon from "@mui/icons-material/Add";
import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SidebarLabelItem from "./SidebarLabelItem";
import { List } from "@mui/material";

const Container = styled.div``;

const ListHeader = styled.div`
  font-size: 1rem;
  display: flex;
  padding-inline-start: 1.375em;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.h2`
  font-size: inherit;
  font-weight: 500;
`;

const SidebarLabels = () => {
  return (
    <Container>
      <ListHeader>
        <StyledTitle>Labels</StyledTitle>
        <IconButton>
          <AddIcon />
        </IconButton>
      </ListHeader>
      <List>
        <SidebarLabelItem label="[Imap]/Drafts" />
        <SidebarLabelItem label="music" />
        <SidebarLabelItem label="Personal" />
      </List>
    </Container>
  );
};

export default SidebarLabels;
