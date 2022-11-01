import React from "react";
import "./App.css";
import HeaderIndex from "./components/Header/HeaderIndex.js";
import styled from "styled-components";

const Container = styled.div`
  padding-inline: 1.5rem;
`;

function App() {
  return (
    <Container>
      <HeaderIndex />
    </Container>
  );
}

export default App;
