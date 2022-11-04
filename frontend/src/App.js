import React from "react";
import { Grid } from "@mui/material";
import HeaderIndex from "./components/Header/HeaderIndex.js";
import SidebarIndex from "./components/Sidebar/SidebarIndex.js";
import MessagesIndex from "./components/Messages/MessagesIndex";
import RightSidebarIndex from "./components/RightSidebar/RightSidebarIndex.js";

function App() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ paddingBlockEnd: "1rem", paddingBlockStart: "0.25rem" }}>
        <HeaderIndex />
      </Grid>
      <Grid item xs={3}>
        <SidebarIndex />
      </Grid>
      <Grid item xs={8}>
        <MessagesIndex />
      </Grid>
      <Grid item xs={1}>
        <RightSidebarIndex />
      </Grid>
    </Grid>
  );
}

export default App;
