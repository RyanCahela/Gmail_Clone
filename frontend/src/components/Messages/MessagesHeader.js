import React, { useState } from "react";
import styled from "styled-components";
import { IconButton, Button } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { GREY_MEDIUM, GREY_LIGHT } from "../../utilites/Colors";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const PageCount = styled.div`
  font-size: 0.875rem;
  color: ${GREY_MEDIUM};
`;

const StyledButton = styled.button`
  appearance: none;
  padding: 0;
  border: 0;
  background-color: transparent;
  position: relative;
  &:hover {
    background-color: ${GREY_LIGHT};
    cursor: pointer;
  }

  &:hover::after {
    align-items: center;
    background-color: ${GREY_MEDIUM};
    border-radius: 5px;
    content: "Select";
    color: white;
    display: flex;
    font-weight: 700;
    height: 2em;
    inset-block: 100%;
    inset-inline-start: 0;
    justify-content: center;
    padding-block: 0.25em;
    padding-inline: 0.5em;
    position: absolute;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
`;

const MessagesHeader = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  return (
    <Container>
      <LeftSide>
        <StyledButtonContainer>
          <StyledButton
            onClick={() => setIsCheckboxChecked((prevState) => !prevState)}>
            {isCheckboxChecked ? (
              <CheckBoxOutlinedIcon fontSize="small" />
            ) : (
              <CheckBoxOutlineBlankIcon fontSize="small" />
            )}
          </StyledButton>
          <StyledButton>
            <ArrowDropDownIcon size="small" />
          </StyledButton>
        </StyledButtonContainer>
        <IconButton>
          <RefreshIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </LeftSide>
      <RightSide>
        {/* Pagination */}
        <PageCount>1-50 of 67,646</PageCount>
        <IconButton>
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </RightSide>
    </Container>
  );
};

export default MessagesHeader;
