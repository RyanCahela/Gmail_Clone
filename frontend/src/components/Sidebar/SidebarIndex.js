import React from "react";
import styled from "styled-components";
import SidebarCompose from "./SidebarCompose";
import SidebarNav from "./SidebarNav";
import SidebarLabels from "./SidebarLabels";
import { GREY_VERY_LIGHT } from "../../utilites/Colors";

const Container = styled.div`
  display: flex;
  background-color: ${GREY_VERY_LIGHT};
  flex-direction: column;
  /* outline: 1px solid red; */
`;

const ScrollableList = styled.div`
  max-height: 70vh;
  overflow-y: auto;
`;

const SidebarIndex = () => {
  return (
    <Container>
      <SidebarCompose />
      <ScrollableList>
        <SidebarNav />
        <SidebarLabels />
      </ScrollableList>
    </Container>
  );
};

export default SidebarIndex;
