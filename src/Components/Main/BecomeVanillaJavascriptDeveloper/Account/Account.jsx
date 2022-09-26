// React and other things
import React from "react";

// React-bootstrap components
import { Button, Col, Form } from "react-bootstrap";

// icons
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// Styled component
import styled from "styled-components";

// React function component
export default function Account() {
  // Row styled component
  const Row = styled.div`
    width: 98%;
    padding: 40px;
    border-radius: 10px;
    margin: 0 auto;
    h2 {
      font-weight: 700;
    }

    .btn-wrapper {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      .btn {
        margin: 5px 4px;
        padding: 10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        &:hover {
          background-color: #f5f4f8;
        }
        svg {
          margin-right: 5px;
        }
        p {
          margin: 0;
          padding: 0;
          font-weight: 600;
        }
      }
    }

    .col {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      hr {
        width: 50%;
      }
      span {
        margin: 0 10px;
        margin-top: -2px;
      }
    }

    .start {
      &:hover {
        background-color: #6343D8 !important;
      }
    }

    h6 {
      span:hover {
        color: #6343d8 !important;
      }
    }

    /* Responsive Tablet */
    @media (max-width: 768px) {
      padding: 20px;
      .btn-wrapper {
        button {
          width: 100%;
          margin: 5px 0;
        }
      }
    }
  `;

  return (
    <Row className="row bg-white">
      <h2 className="p-0 text-dark">Create Free Account</h2>
      <span className="p-0 btn-wrapper">
        <Button variant="white" className="shadow-sm border">
          <MdEmail className="text-danger" />
          <p>Google</p>
        </Button>
        <Button variant="white" className="shadow-sm border">
          <BsTwitter className="text-info" />
          <p>Twitter</p>
        </Button>
        <Button variant="white" className="shadow-sm border">
          <BsFacebook className="text-primary" />
          <p>Facebook</p>
        </Button>
      </span>

      <Col>
        <hr />
        <span>OR</span>
        <hr />
      </Col>
      <Form className="p-0">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="py-2" type="email" placeholder="Eemail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="py-2" type="email" placeholder="Password" />
        </Form.Group>
        <Button
          children="Start Courses for Free"
          className="w-100 pb-3 start"
        />
      </Form>
      <hr className="mt-5 mb-3" />
      <h6 className="p-0 fs-6 fw-normal text-muted">
        By continuing you accept the{" "}
        <span className="fw-bold text-dark"> Terms of Use, Privacy Policy</span>
        , and <span className="fw-bold text-dark"> Data Policy</span>
      </h6>
    </Row>
  );
}
