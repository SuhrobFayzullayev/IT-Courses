// React-bootstrap components
import { Col, ListGroup, Row } from "react-bootstrap";

// icons
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

// Styled component
import styled from "styled-components";

// React function component
export default function Footer() {
  console.log(1111);

  // Row styled component
  const Div = styled.div`
    padding: 50px;
    padding-bottom: 10px !important;
    svg:hover {
      color: #633af8 !important;
    }

    .list-group-item {
      padding: 5px 0;
      border: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: #18113c97;
      cursor: pointer;
      &:hover {
        color: #633af8;
      }
    }

    h4 {
      font-weight: 600;
      color: #18113c;
    }

    p {
      font-size: 0.875rem !important;
      font-weight: 500 !important;
      color: #18113c97 !important;
    }

    .footer-bottom {
      margin-top: -7px !important;
      flex-wrap: wrap !important;
      justify-content: center;
      p {
        margin: 5px 10px !important;
        text-align: center;
      }
    }

    /* Responsive media Phone */
    @media (max-width: 576px) {
      flex-wrap: wrap !important;
      .cl-sm {
        width: 30% !important;
        margin-right: 60px !important;
      }
      .cl-sm2 {
        width: 50% !important;
      }
    }

    /* Responsive media Iphone */
    @media (max-width: 450px) {
      flex-wrap: wrap !important;

      .cl-sm2 {
        width: 100% !important;
      }
    }
  `;

  return (
    <Div>
      <Row>
        <Col lg={4} md={5} sm={12} className=" mb-4 pe-5 me-3">
          <img
            src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"
            alt=""
          />
          <p className="text-dark my-3">
            Geek is feature-rich components and beautifully Bootstrap UIKit for
            developers, built with bootstrap responsive framework.
          </p>
          <span className="d-flex">
            <div>
              <BsFacebook className="m-1 text-muted" />
            </div>
            <div>
              <BsTwitter className="m-1 text-muted" />
            </div>
            <div>
              <BsInstagram className="m-1 text-muted" />
            </div>
          </span>
        </Col>
        <Col lg={2} md={2} sm={4} className="cl-sm  mb-4 me-5">
          <h4>Company</h4>
          <ListGroup className="border-0 ">
            <ListGroup.Item>About</ListGroup.Item>
            <ListGroup.Item>Pricing</ListGroup.Item>
            <ListGroup.Item>Blog</ListGroup.Item>
            <ListGroup.Item>Careers</ListGroup.Item>
            <ListGroup.Item>Contact</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2} md={3} sm={5} className=" cl-sm2 mb-4">
          <h4>Support</h4>
          <ListGroup className="border-0 ">
            <ListGroup.Item>Help and Support</ListGroup.Item>
            <ListGroup.Item>Become Instructor</ListGroup.Item>
            <ListGroup.Item>Get the app</ListGroup.Item>
            <ListGroup.Item>FAQ’s</ListGroup.Item>
            <ListGroup.Item>Tutorial</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={12} sm={12} className=" col">
          <h4>Get in touch</h4>
          <p className="mb-1">339 McDermott Points</p>
          <p>Hettingerhaven, NV 15283</p>
          <p className="mb-1">
            Email: <span className="text-primary">support@geeksui.com</span>
          </p>
          <p className="mt-0">
            Phone: <span className="text-dark fw-bold">(000) 123 456 789</span>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="footer-bottom d-flex align-items-center">
          <p>© 2022 Geeks-UI, Inc. All Rights Reserved</p>
          <p>Privacy Policy</p>
          <p>Cookie Notice</p>
          <p>Do Not Sell My Personal Information</p>
          <p>Terms of Use</p>
        </Col>
      </Row>
    </Div>
  );
}
