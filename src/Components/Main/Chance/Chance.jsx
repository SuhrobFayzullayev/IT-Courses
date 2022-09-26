// React and other things
import React from "react";

// React-bootstrap components
import { Col } from "react-bootstrap";

// icons
import { AiOutlineCheck } from "react-icons/ai";

// Styled component
import styled from "styled-components";

// data
const data = [
  "Shareable Certificate",
  "Flexible Deadlines",
  "100% Online Courses",
  "Approx.24 hours",
];

// React function component
export default function Chance() {
  // Row styled component
  const Row = styled.div`
    padding: 0;
    .icon {
      width: 25px;
      height: 25px;
      margin: 0 5px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffeeda;
      svg {
        color: #c28135;
      }
    }
  `;

  return (
    <Row className="row">
      {data.map((v, i) => (
        <Col
          key={i + "description"}
          className="py-3 d-flex justify-content-center align-items-center"
          lg={3}
          md={6}
          sm={12}
        >
          <div className="icon">
            <AiOutlineCheck className="text-warning"></AiOutlineCheck>
          </div>
          <h6 className="p-0 m-0 fw-bold">{v}</h6>
        </Col>
      ))}
    </Row>
  );
}
