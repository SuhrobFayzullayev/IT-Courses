// React-bootstrap components
import { Col, Card } from "react-bootstrap";

// Styled component
import styled from "styled-components";

// React function component
export default function ReadersFeedback() {
  // Row styledcomponent
  const Row = styled.div`
    h1 {
      font-weight: 700;
      font-size: 2.5rem;
    }

    .card-footer {
      position: relative;
      .center-img {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 0% !important;
        left: 50%;
        right: 50%;
        margin: -40px -40px;
      }
    }

    /* Responsive media Phone */
    @media (max-width: 576px) {
      .card-wrapper {
        padding: 0 !important;
      }
    }

    /* Responsive media Tablet */
    @media (max-width: 768px) {
      .card-wrapper {
        padding: 0 70px;
      }
    }
  `;

  return (
    <Row className="py-5 bg-light row text-center">
      <h6 className="text-primary mt-5">TESTIMONIALS</h6>
      <h1 className="my-4 text-center text-dark">
        What our learners are saying
      </h1>
      <h5 className="fw-normal text-muted mb-5">
        12+ million people are already learning on Geeks
      </h5>
      <div className="row mx-auto my-3 py-5 card-wrapper">
        <Col className="mx-auto my-3 " md={6} sm={12}>
          <Card className="h-100">
            <Card.Body className="p-5">
              <Card.Text className="mb-4 h5 fw-normal">
                I started at stage zero. With Geeks I was able to start learning
                online and eventually build up enough knowledge and skills to
                transition into a well-paying career.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="pb-3 pt-5 bg-primary">
              <div className="center-img rounded-circle border border-primary center-img">
                <img
                  src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />
              </div>
              <h4 className="text-white">Barry Watson</h4>
              <h6 className="text-white-50">Web Developer,UK</h6>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} className="mx-auto my-3" sm={12}>
          <Card className="h-100">
            <Card.Body className="p-5">
              <Card.Text className="mb-4 h5 fw-normal">
                And when the orcs are born, the mountains will give birth to
                feathers and great arrows, and a ridiculous mouse will be born.
                Even vulputate euismod just in consequence. But time is an
                element of urnanisl and lake.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="pb-3 pt-5 bg-info">
              <div className="center-img rounded-circle border border-info center-img">
                <img
                  src="https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />
              </div>
              <h4 className="text-white">Linda Shenoy</h4>
              <h6 className="text-white-50">
                Developer and Bootcamp Instructor
              </h6>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    </Row>
  );
}
