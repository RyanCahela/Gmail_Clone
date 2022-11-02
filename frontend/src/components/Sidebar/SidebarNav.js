import React from "react";
import styled from "styled-components";
import SidebarNavItem from "./SidebarNavItem";
import { List, ListItem, ListItemIcon } from "@mui/material";

//icon imports
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const navItems = [
  {
    Icon: InboxIcon,
    label: "Inbox",
    quantity: 59_419,
    isFontBold: true,
  },
  {
    Icon: StarBorderIcon,
    label: "Starred",
    quantity: null,
  },
  {
    Icon: AccessTimeIcon,
    label: "Snoozed",
    quantity: null,
  },
  {
    Icon: LabelImportantOutlinedIcon,
    label: "Important",
    quantity: null,
  },
  {
    Icon: SendOutlinedIcon,
    label: "Send",
    quantity: null,
  },
  {
    Icon: InsertDriveFileOutlinedIcon,
    label: "Drafts",
    quantity: 40,
    isFontBold: true,
  },
  {
    Icon: LabelOutlinedIcon,
    label: "Categories",
    quantity: null,
    isFontBold: true,
  },
  {
    Icon: ExpandMoreOutlinedIcon,
    label: "More",
    quantity: null,
  },
];

const Container = styled.div`
  /* outline: 1px solid green; */
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 0.25rem;
  padding-inline-end: 1em;
  padding-inline-start: 0;
`;

const SidebarNav = () => {
  return (
    <Container>
      <nav>
        <StyledList>
          {navItems.map((props) => (
            <SidebarNavItem key={props.label} {...props} />
          ))}
        </StyledList>
      </nav>
    </Container>
  );
};

export default SidebarNav;
