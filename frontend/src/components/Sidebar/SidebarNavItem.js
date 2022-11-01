import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  display: flex;
  gap: 1em;
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
      <div>
        <Icon />
      </div>
      <LabelDisplay isFontBold={isFontBold}>{label}</LabelDisplay>
      <QuantityDisplay>{quantity}</QuantityDisplay>
    </StyledListItem>
  );
};

export default SidebarNavItem;
