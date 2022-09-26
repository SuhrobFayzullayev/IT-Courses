// React-bootstrap components
import { Row, Col } from "react-bootstrap";

// data
const data = [
  "https://geeks-react.netlify.app/static/media/gray-logo-stripe.3d4095cb6e5725f47918b560794f28ff.svg",
  "https://geeks-react.netlify.app/static/media/gray-logo-airbnb.7ae2c76b073d54d58c84060e25026c99.svg",
  "https://geeks-react.netlify.app/static/media/gray-logo-discord.04b33527e93d593d4dddc17c1b433aa2.svg",
  "https://geeks-react.netlify.app/static/media/gray-logo-intercom.89c85d324d492710ca01cac5ee8363f5.svg",
  "https://geeks-react.netlify.app/static/media/gray-logo-pinterest.caf3876a8c4887c3ce26ef6d74172e2a.svg",
  "https://geeks-react.netlify.app/static/media/gray-logo-netflix.5b0aff628289b0ac23e64681e4140e5d.svg",
];

// React function component
export default function Sponsors() {
  return (
    <Row className="py-5">
      {data.map((v, i) => (
        <Col
          key={i + "sponsors"}
          lg={2}
          md={4}
          sm={6}
          className="py-4 d-flex justify-content-center align-items-center col-6"
        >
          <img src={v} />
        </Col>
      ))}
    </Row>
  );
}
