import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";
import { GREY_MEDIUM } from "../../utilites/Colors";

const Container = styled.header`
  display: flex;
  padding-block-start: 0.5rem;
  color: ${GREY_MEDIUM};
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
