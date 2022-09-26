// React-bootstrap components
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

// React Router Dom
import { Link } from "react-router-dom";

// Div Styled Component
import Div from "../../styles/styles";

// React function component
export default function ForgotPassword() {
  return (
    <Div>
      <Container fluid="xl" className="bg-light">
        <Row className="py-5 px-0">
          <Col
            lg={5}
            md={5}
            sm={12}
            className="border col bg-white rounded mx-auto p-4 text-start"
          >
            <Card className="border-0">
              <Link to="/" className="text-decoration-none text-center">
                <Card.Img
                  className="m-3 mb-1 mx-auto"
                  style={{ width: "60px", height: "60px" }}
                  src="https://geeks-react.netlify.app/static/media/logo-icon.ef90e78058ae6a66eabcbb0a6b6976f5.svg"
                />
              </Link>

              <Card.Body>
                <Card.Title className="text-dark text-center fs-2 fw-bold">
                  Forgot Password
                </Card.Title>
                <Card.Text className="text-center">
                  Fill the form to reset your password.
                </Card.Text>
                <Form className="my-4">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-5 text-dark">Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="p-3 text-dark fs-6"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="w-100 mt-0 py-3 border-0"
                    type="submit"
                  >
                    Send Reset Link
                  </Button>
                </Form>
                <p>
                  Return to{" "}
                  <Link to="/sign-in" className="text-decoration-none">
                    <span className="text-primary"> Sign In</span>
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}
