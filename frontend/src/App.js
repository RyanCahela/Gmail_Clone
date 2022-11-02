import React from "react";
import { Grid } from "@mui/material";
import HeaderIndex from "./components/Header/HeaderIndex.js";
import SidebarIndex from "./components/Sidebar/SidebarIndex.js";
import styled from "styled-components";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeaderIndex />
      </Grid>
      <Grid item xs={3}>
        <SidebarIndex />
      </Grid>
    </Grid>
  );
}

export default App;
