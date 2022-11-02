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
