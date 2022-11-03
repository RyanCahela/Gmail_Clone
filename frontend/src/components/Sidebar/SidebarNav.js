import React, { useState } from "react";
import styled from "styled-components";
import SidebarNavItem from "./SidebarNavItem";
import { List, ListItem, ListItemIcon, Collapse } from "@mui/material";

//icon imports
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

//collapse menu icons
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div``;

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
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <Container>
      <nav>
        <StyledList>
          <SidebarNavItem
            Icon={InboxIcon}
            label="Inbox"
            isFontBold="true"
            quantity={59_490}
          />
          <SidebarNavItem Icon={StarBorderIcon} label="Starred" />
          <SidebarNavItem Icon={AccessTimeIcon} label="Snoozed" />
          <SidebarNavItem Icon={LabelImportantOutlinedIcon} label="Important" />
          <SidebarNavItem Icon={SendOutlinedIcon} label="Send" />
          <SidebarNavItem
            Icon={InsertDriveFileOutlinedIcon}
            label="Drafts"
            isFontBold="true"
            quantity={40}
          />
          <SidebarNavItem
            Icon={LabelOutlinedIcon}
            label="Categories"
            isFontBold="true"
          />

          <SidebarNavItem
            label={isCollapseOpen ? "Less" : "More"}
            Icon={isCollapseOpen ? ExpandLessIcon : ExpandMoreOutlinedIcon}
            onClick={() => setIsCollapseOpen((prevState) => !prevState)}
          />
          <Collapse in={isCollapseOpen}>
            <SidebarNavItem Icon={ChatOutlinedIcon} label="Chats" />
            <SidebarNavItem Icon={ScheduleSendOutlinedIcon} label="Scheduled" />
            <SidebarNavItem Icon={MarkAsUnreadOutlinedIcon} label="All Mail" />
            <SidebarNavItem
              Icon={ErrorOutlineOutlinedIcon}
              label="Spam"
              isFontBold="true"
              quantity={25}
            />
            <SidebarNavItem Icon={DeleteOutlineOutlinedIcon} label="Trash" />
            <SidebarNavItem Icon={SettingsOutlinedIcon} label="Manage labels" />
            <SidebarNavItem Icon={AddIcon} label="Create new label" />
          </Collapse>
        </StyledList>
      </nav>
    </Container>
  );
};

export default SidebarNav;
