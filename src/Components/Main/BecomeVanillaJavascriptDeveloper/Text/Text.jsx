// React and other things
import React from "react";

// React-bootstrap components
import { Button } from "react-bootstrap";

// icons
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiUsers, FiVideo } from "react-icons/fi";

// Styled component
import styled from "styled-components";

// data
const data = [
  {
    icon: <AiOutlineClockCircle />,
    text: "4 Hours",
  },
  {
    icon: <FiVideo />,
    text: "12 Videos",
  },
  {
    icon: <FiUsers />,
    text: "10,234+ Enrolled",
  },
];

// React function component
export default function Text() {
  // Wrapper styled component
  const Wrapper = styled.div`
    h1 {
      font-size: 3.5rem;
    }

    h5 {
      line-height: 30px;
    }

    .btn-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    /* Responsive media Tablet */
    @media (max-width: 768px) {
      text-align: center;

      span,
      .btn-wrapper {
        justify-content: center;
      }
    }
  `;

  // Div styled component
  const Div = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;
    svg {
      margin-right: 10px;
      color: #ffaa46;
      font-size: 18px;
    }
  `;

  return (
    <Wrapper>
      <h1 className="fw-bolder text-white">
        Become a Vanilla JavaScript Developer
      </h1>
      <h5 className="my-4 text-white-50">
        In this tutorial, we are going to learn about JavaScript (Vanilla JS) -
        for building incredible, powerful JavaScript applications.
      </h5>
      {data.map((v, i) => (
        <Div className="text-white-50" key={i + "text"}>
          {v.icon} {v.text}
        </Div>
      ))}
      <div className="btn-wrapper">
        <Button
          className="my-4 px-4 py-2 d-flex justify-content-center align-items-center"
          variant="light"
        >
          <p className="p-0 m-0 pb-1 fw-bold">Watch Preview</p>
        </Button>
      </div>
    </Wrapper>
  );
}
