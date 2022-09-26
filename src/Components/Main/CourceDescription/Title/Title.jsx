// React-bootstrap components
import { Col } from "react-bootstrap";

// React function component
export default function Title() {
  return (
    <Col md={12} sm={12} lg={8} className="text-center mx-auto my-5">
      <h6 className="text-primary">COURSE DESCRIPTION</h6>
      <h1 className="fw-bold my-3 text-dark ">What will you learn?</h1>
      <h5 className="lh-base fw-normal" style={{ color: "#5c5776" }}>
        Vanilla JS is a fast, lightweight, cross-platformframework for building
        incredible, powerful JavaScript applications.
      </h5>
    </Col>
  );
}
