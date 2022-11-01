import React from "react";
import "./App.css";
import HeaderIndex from "./components/Header/HeaderIndex.js";
import SidebarIndex from "./components/Sidebar/SidebarIndex.js";
import styled from "styled-components";

const Container = styled.div`
  padding-inline: 1.5rem;
`;

function App() {
  return (
    <Container>
      <HeaderIndex />
      <SidebarIndex />
    </Container>
  );
}

export default App;
