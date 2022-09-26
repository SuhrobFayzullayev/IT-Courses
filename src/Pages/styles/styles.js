// Styled component
import styled from "styled-components";

// Div styled component
const Div = styled.div`
  .col {
    width: 400px !important;
  }
  .form-control {
    height: 50px !important;
    font-weight: 400;
    &:focus {
      box-shadow: 0 0 2px 3px #754ffe20;
      border-color: #754ffe;
    }
  }

  button {
    font-size: 14px;
    font-weight: 500;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 35px;
      height: 35px;
      margin: 2px;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.5px solid #a8a3b9;
      color: #a8a3b9;
      transition: all 0.2s;
      &:hover {
        background-color: #3d5a99;
        color: white;
      }
    }
  }
`;

export default Div;
