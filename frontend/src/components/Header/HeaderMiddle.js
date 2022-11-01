import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { greyMedium, greyLight } from "../../utilites/Colors";

const Container = styled.form`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${greyLight};
  padding-inline: 1em;
  padding-block: 0.5em;
  color: ${greyMedium};
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border: none;
  background-color: transparent;
  color: ${greyMedium};

  &::placeholder {
    color: ${greyMedium};
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

const FormSubmitButton = styled.button`
  visibility: hidden;
`;

const HeaderMiddle = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searchValue", searchValue);
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      <SearchIcon />
      <StyledInput
        type="text"
        placeholder="Search Mail"
        value={searchValue}
        defaultValue={""}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <FormSubmitButton type="submit">Search</FormSubmitButton>
      <ArrowDropDownIcon />
    </Container>
  );
};

export default HeaderMiddle;
