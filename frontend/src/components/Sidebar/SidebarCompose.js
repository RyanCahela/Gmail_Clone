import React from "react";

import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import styled from "styled-components";
import { BLUE_LIGHT } from "../../utilites/Colors";

const Container = styled.div`
  display: flex;
  padding-inline-start: 0.5rem;
`;

const ComposeButton = styled.button`
  background-color: ${BLUE_LIGHT};
  padding-block: 1em;
  padding-inline: 1.5em;
  display: flex;
  gap: 1em;
  align-items: center;
  font-weight: 700;
  border-radius: 1em;
  border: none;

  &:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302),
      0 4px 8px 3px rgba(60, 64, 67, 0.149);
    cursor: pointer;
  }
`;

const SidebarCompose = () => {
  return (
    <Container>
      <ComposeButton>
        <CreateOutlinedIcon />
        <span>Compose</span>
      </ComposeButton>
    </Container>
  );
};

export default SidebarCompose;
