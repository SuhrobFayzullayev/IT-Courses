// React and other things
import React from "react";

// Styled component
import styled from "styled-components";

// icons
import { BsSearch } from "react-icons/bs";

// SearchElement styled component
const SearchElement = styled.div`
  background-color: #413c5e;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;

  @media (max-width: 992px) {
    margin: 10px 0;
  }

  svg {
    color: #c5c5c5;
    font-size: 14px;
  }

  input {
    color: white;
    border: none;
    outline: none;
    background-color: transparent;
    padding-bottom: 4px;
    &::placeholder {
      color: #c5c5c5;
    }
  }
`;

// Search function component
export default function Search() {
  return (
    <SearchElement className="px-3">
      <BsSearch className="me-3" />
      <input type="search" placeholder="Search Courses" />
    </SearchElement>
  );
}
