import React from "react";
import styled from "styled-components";
import { BLUE_GREY_VERY_LIGHT } from "../../utilites/Colors";

const StyledListItem = styled.li`
  align-items: center;
  display: flex;
  gap: 1em;

  padding-inline-start: 1em;
  padding-inline-end: 0.5em;

  &:hover {
    cursor: pointer;
    background-color: ${BLUE_GREY_VERY_LIGHT};
  }
`;

const QuantityDisplay = styled.div`
  margin-inline-start: auto;
`;

const LabelDisplay = styled.div`
  font-weight: ${(props) => (props.isFontBold ? "700" : "500")};
`;

const SidebarNavItem = ({ label, Icon, quantity, isFontBold = false }) => {
  return (
    <StyledListItem>
      <Icon />
      <LabelDisplay isFontBold={isFontBold}>{label}</LabelDisplay>
      <QuantityDisplay>{quantity}</QuantityDisplay>
    </StyledListItem>
  );
};

export default SidebarNavItem;
