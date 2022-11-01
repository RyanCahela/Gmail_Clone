import React from "react";
import styled from "styled-components";
import SidebarCompose from "./SidebarCompose";
import SidebarNav from "./SidebarNav";
import SidebarLabels from "./SidebarLabels";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  outline: 1px solid red;
  overflow: auto;
`;

const SidebarIndex = () => {
  return (
    <Container>
      <SidebarCompose />
      <SidebarNav />
      <SidebarLabels />
    </Container>
  );
};

export default SidebarIndex;
