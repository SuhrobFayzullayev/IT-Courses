// React and other things
import React from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Styled component
import styled from "styled-components";

// Buttons function component
export default function Buttons() {
  // Button styled component
  const Span = styled.span`
    .btn {
      padding: 11px 18px;
      text-align: center;
      p {
        margin: 0;
        margin-top: -1px;
        font-weight: 600;
      }
    }
  `;

  return (
    <Span>
      <Link to="/sign-in" className="btn btn-light text-dark me-1">
        <p className="text-dark">Sign In</p>
      </Link>{" "}
      <Link to="sign-up" className="btn btn-primary">
        <p>Sign Up</p>
      </Link>
    </Span>
  );
}
