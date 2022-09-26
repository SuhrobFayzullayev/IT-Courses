// React and other things
import React, { memo } from "react";

// React-bootstrap components
import { Card, Col, Modal, Row } from "react-bootstrap";

// Styled component
import styled, { createGlobalStyle } from "styled-components";

import { FiLock } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";

// data
const data = [
  [
    { play: true, text: "Introduction", time: "1m 7s" },
    { play: true, text: "Installing Development Software", time: "3m 11s" },
    { play: false, text: "Our Sample Website", time: "2m 15s" },
  ],
  [
    { play: false, text: "Introduction", time: "1m 41s" },
    {
      play: false,
      text: "Adding JavaScript Code to a Web Page",
      time: "3m 39s",
    },
    { play: false, text: "Working with Javascript Files", time: "6m 18s" },
    { play: false, text: "Formatting Code", time: "2m 18s" },
    { play: false, text: "Detecting and Fixing Errors", time: "2m 18s" },
    { play: false, text: "Case Sensitivity", time: "1m 48s" },
    { play: false, text: "Commenting Code", time: "2m 24s" },
    { play: false, text: "Summary", time: "2m 14s" },
  ],
  [
    { play: false, text: "Introduction", time: "1m 52s" },
    { play: false, text: "Clip Watched", time: "4m 27s" },
    { play: false, text: "Conditional Using if()", time: "4m 25s" },
    { play: false, text: "Truthy and Falsy", time: "3m 30s" },
    { play: false, text: "if ... else", time: "3m 30s" },
    { play: false, text: "Comparing === and ==", time: "1m 52s" },
    { play: false, text: "The Ternary Operator", time: "2m 47s" },
    { play: false, text: "Block Scope Using let", time: "2m 21s" },
    { play: false, text: "Looping with for()", time: "5m 30s" },
    { play: false, text: "Looping with do ... white()", time: "1m 58s" },
    { play: false, text: "Summary", time: "2m 21s" },
  ],
  [
    { play: false, text: "Introduction", time: "1m 19s" },
    { play: false, text: "What is Variables", time: "2m 11s" },
    { play: false, text: "Declaring Variables", time: "2m 30s" },
    { play: false, text: "Using let to Declaring Variables", time: "3m 28s" },
    { play: false, text: "Naming Variables", time: "3m 14s" },
    { play: false, text: "Common Errors Using Variables", time: "3m 30s" },
    { play: false, text: "Changing Variable Values", time: "2m 04s" },
    { play: false, text: "The var Keywords", time: "2m 20s" },
    { play: false, text: "Summary", time: "1m 49s" },
  ],
];

// React function component
export default memo(function Modals(props) {
  // Modal Values
  const { img, header, text } = props.value.v;

  // Topics data play type
  const topics = data[props.value.i];

  // CustomCol styled component
  const CustomCol = styled.div`
    /* Responsive media Tablet */
    @media (max-width: 768px) {
      h3,
      p {
        text-align: center !important;
      }
    }
  `;

  // GlobalStyle styled global component
  const GlobalStyle = createGlobalStyle`
    .btn-close{
      transform: translateX(-10px);
    }
  `;

  return (
    <>
      {/* There are GlobalStyle styled component */}
      <GlobalStyle />

      <Modal
        {...props}
        size="lg"
        className="mx-auto"
        style={{ backgroundColor: "#0C091E" }}
      >
        <Modal.Header closeButton className="p-2 px-3 pb-0">
          <Row className="py-1 pt-2 m-0">
            <Col sm={12} md={2}>
              <div
                style={{ width: "60px", height: "60px" }}
                className="mx-auto rounded-circle d-dlex justify-content-center align-items-center bg-primary mb-2 "
              >
                <Card.Img src={img}></Card.Img>
              </div>
            </Col>
            <CustomCol className="col">
              {" "}
              <h3 className="fw-bold">
                <span>{header.title}</span>
              </h3>{" "}
              <p
                className="text-dark"
                style={{ fontSize: "13px", fontWeight: "700" }}
              >
                {header.text1}
                {header.text2}
              </p>
            </CustomCol>
          </Row>
        </Modal.Header>
        <Modal.Body className="p-4">
          <h4>In this course you’ll learn:</h4>
          <p>{text}</p>
          <Row>
            {topics.map((v, i) => (
              <Col
                key={i + "modals"}
                className="d-flex justify-content-between align-items-center col-12 border-bottom py-3 w-100"
              >
                <span className="me-2 text-dark d-flex justify-content-between align-items-center">
                  <div
                    style={{ width: "30px", height: "30px" }}
                    className="me-2 rounded-circle bg-light p-0 d-flex justify-content-center align-items-center"
                  >
                    {(v.play && (
                      <BsFillPlayFill className="text-primary" />
                    )) || <FiLock style={{ color: "#a8a3b9" }} />}
                  </div>
                  {v.text}
                </span>
                <span>{v.time}</span>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
});
