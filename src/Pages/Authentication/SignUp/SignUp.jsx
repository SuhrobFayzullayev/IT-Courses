// React-bootstrap components
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

// icons
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

// React Router Dom
import { Link } from "react-router-dom";

// Div Styled Component
import Div from "../../styles/styles";

// React function component
export default function SignUp() {
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
                  Sign up
                </Card.Title>
                <Form className="my-4">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-5 text-dark">
                      User Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="p-3 text-dark fs-6"
                      placeholder="User Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-5 text-dark">Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="p-3 text-dark fs-6"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fs-5 text-dark">Password</Form.Label>
                    <Form.Control
                      className="p-3 text-dark fs-6"
                      type="password"
                      placeholder="*********"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2 d-flex"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox" />
                    <p className="ms-2">
                      I agree to the
                      <span className="text-primary"> Terms of Service </span>
                      and
                      <span className="text-primary"> Privacy Policy.</span>
                    </p>
                  </Form.Group>
                  <Button
                    variant="primary"
                    className="w-100 mt-0 py-3 border-0"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Form>
                <p>
                  Already have an account?{" "}
                  <Link to="/sign-in" className="text-decoration-none">
                    <span className="text-primary"> Sign In</span>
                  </Link>
                </p>
                <hr />
                <div className="icons">
                  <div>
                    <BsFacebook />
                  </div>
                  <div>
                    <AiOutlineTwitter />
                  </div>
                  <div>
                    <IoLogoLinkedin />
                  </div>
                  <div>
                    <AiFillGithub />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}
