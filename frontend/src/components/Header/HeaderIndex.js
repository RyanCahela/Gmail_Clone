import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";
import { greyMedium } from "../../utilites/Colors";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding-block-start: 0.5rem;
  color: ${greyMedium};
`;
const Header = () => {
  return (
    <Container>
      <HeaderLeft />
      <HeaderMiddle color="red" />
      <HeaderRight />
    </Container>
  );
};

export default Header;
