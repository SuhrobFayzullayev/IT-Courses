// React-bootstrap components
import { Col } from "react-bootstrap";

// Styled component
import styled from "styled-components";

// React function component
export default function YourInstructor() {
  // CustomCol styled component
  const Row = styled.div`
    width: 75%;
    margin: 100px auto;
    h1 {
      margin: 15px 0;
      font-size: 2.7rem !important;
    }
    h4 {
      font-size: 24px;
      font-weight: 400;
      color: #716f83;
      margin-bottom: 30px;
    }

    /* Responsive media Tablet */
    @media (max-width: 992px) {
      width: 100%;
      div {
        h1,
        h2,
        h4,
        h6,
        p {
          text-align: center !important;
        }
      }
    }
  `;

  return (
    <Row className="row">
      <Col lg={7} md={9} sm={12} className="order-1 mx-auto">
        <h6 className="text-primary">YOUR INSTRUCTON</h6>
        <h1 className="text-dark fw-bold">
          Hi, I’m <span className="text-primary">James Davies</span>, I will be
          taking you through lessons.
        </h1>
        <h4 className="p-0 m-0">
          Create beautiful website with this Geeks UI template. Get started
          building a site today.
        </h4>
        <hr className="my-4" />
        <div className="p-0 px-md-3 row">
          <Col sm className="p-0">
            <h2 className="fw-bold mb-0 ls-xs text-dark">45</h2>
            <p className="mb-3">Lessons</p>
          </Col>
          <Col sm lg={5} className="p-0">
            <h2 className="fw-bold mb-0 ls-xs text-dark">10,500+</h2>
            <p className="mb-3">Students</p>
          </Col>
          <Col sm className="p-0">
            <h2 className="fw-bold mb-0 ls-xs text-dark">12+</h2>
            <p className="mb-3">Learning Hours</p>
          </Col>
        </div>
      </Col>
      <Col
        lg={5}
        md={12}
        sm={12}
        className="py-5 mx-auto order-lg-2 d-flex justify-content-center align-items-center"
      >
        <img
          src="https://geeks-react.netlify.app/static/media/instructor-img.1ed9cc40ee4734876e12.png"
          alt=""
          className="img-fluid"
        />
      </Col>
    </Row>
  );
}
