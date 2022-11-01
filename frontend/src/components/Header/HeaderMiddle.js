import React, { useState, useId } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { greyMedium, greyLight } from "../../utilites/Colors";

const Container = styled.form`
  align-items: center;
  background-color: ${greyLight};
  color: ${greyMedium};
  display: flex;
  flex-basis: 50%;
  gap: 1rem;
  max-width: 720px;
  padding-inline: 1em;
  padding-block: 0.5em;
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

const SearchIconLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

const HeaderMiddle = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchInputId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searchValue", searchValue);
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      <SearchIconLabel htmlFor={searchInputId}>
        <SearchIcon />
      </SearchIconLabel>
      <StyledInput
        type="text"
        placeholder="Search Mail"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        id={searchInputId}
      />
      <FormSubmitButton type="submit">Search</FormSubmitButton>
      <IconButton>
        <TuneIcon />
      </IconButton>
    </Container>
  );
};

export default HeaderMiddle;
