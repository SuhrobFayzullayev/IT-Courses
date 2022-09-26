import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <Row className="text-center py-5 bg-dark">
      <Col className="mx-auto" md={7}>
        <h1 className="text-white mt-5 fw-bold" style={{ fontSize: "50px" }}>
          Join more than 1 million learners worldwide
        </h1>

        <h4 className="fw-normal text-white my-4">
          Effective learning starts with assessment. Learning a new skill is
          hard work—Signal makes it easier.
        </h4>

        <Row className="d-flex justify-content-center align-items-center px-3 my-5">
          <Col md={6} sm={8} className="px-1 py-0 my-1">
            <Link
              to="/sign-up"
              className="btn btn-primary w-100 border-0  d-flex align-items-center justify-content-center"
            >
              <p className="text-center py-1 m-0  mb-1">
                Start Learning for Free
              </p>
            </Link>
          </Col>
          <Col md={6} sm={8} className="px-1 py-0 my-1">
            <Link
              to="/sign-up"
              className="btn btn-info w-100 border-0 d-flex align-items-center justify-content-center"
            >
              <p className="text-center text-white py-1 mb-1 m-0">
                Geeks for Business
              </p>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
