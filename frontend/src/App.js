import React from "react";
import "./App.css";
import HeaderIndex from "./components/Header/HeaderIndex.js";
import SidebarIndex from "./components/Sidebar/SidebarIndex.js";
import styled from "styled-components";

const Container = styled.div`
  padding-inline: 1.5rem;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 75px auto;
`;

const TopRow = styled.div`
  grid-column: 1 / -1;
`;

const FirstCol = styled.div`
  grid-column: 1 / 2;
`;

function App() {
  return (
    <Container>
      <TopRow>
        <HeaderIndex />
      </TopRow>
      <FirstCol>
        <SidebarIndex />
      </FirstCol>
    </Container>
  );
}

export default App;
