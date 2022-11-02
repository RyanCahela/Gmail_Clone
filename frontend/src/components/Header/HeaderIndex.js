import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";
import { GREY_MEDIUM } from "../../utilites/Colors";
import { Grid } from "@mui/material";

const Container = styled.header`
  color: ${GREY_MEDIUM};
`;
const Header = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          alignItems: "center",
        }}>
        <Grid item xs={3}>
          <HeaderLeft />
        </Grid>
        <Grid item xs={6}>
          <HeaderMiddle />
        </Grid>
        <Grid item xs={3}>
          <HeaderRight />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
