import React from "react";
import styled from "styled-components";
import { BLUE_GREY_VERY_LIGHT } from "../../utilites/Colors";

const StyledListItem = styled.li`
  align-items: center;
  display: flex;
  gap: 1em;

  padding-inline-start: 1em;
  padding-inline-end: 0.5em;
  padding-block: 0.35em;
  --border-radius: 1rem;
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

  &:hover {
    cursor: pointer;
    background-color: ${BLUE_GREY_VERY_LIGHT};
  }
`;

const QuantityDisplay = styled.div`
  margin-inline-start: auto;
`;

const LabelDisplay = styled.div`
  /* font-weight: ${(props) => (props.isFontBold ? "700" : "500")}; */
  font-weight: inherit;
`;
const StyledIconContainer = styled.div`
  margin-inline-start: 0.5rem;
`;

const SidebarNavItem = ({
  label,
  Icon,
  quantity = null,
  isFontBold = false,
  onClick,
}) => {
  return (
    <StyledListItem onClick={onClick}>
      <StyledIconContainer>
        <Icon fontSize={"small"} />
      </StyledIconContainer>
      <LabelDisplay style={isFontBold ? { fontWeight: "700" } : {}}>
        {label}
      </LabelDisplay>
      <QuantityDisplay>{quantity}</QuantityDisplay>
    </StyledListItem>
  );
};

export default SidebarNavItem;
