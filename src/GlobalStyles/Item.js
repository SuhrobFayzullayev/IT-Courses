// Styled component
import styled from "styled-components";

// Item styled component
export const Item = styled.a`
  &.dropdown-item {
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");

    color: #18113c;
    font-size: 14px;
    line-height: 28px;
    padding: 0.125rem 3rem 0.125rem 1.3rem;
    font-family: "Inter";

    &:hover {
      background-color: #f5f4f8 !important;
      color: #754ffe !important;
    }
  }
`;
