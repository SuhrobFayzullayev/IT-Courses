// React-bootstrap components
import { Col } from "react-bootstrap";

// Styled component
import styled from "styled-components";

// Components
import Account from "./Account";
import Text from "./Text";

// React function component
export default function BecomeVanillaJavascriptDeveloper() {
  // Row styled component
  const Row = styled.div`
    padding: 100px 50px;

    /* Responsive tabler */
    @media (max-width: 768px) {
      padding: 50px 0;
    }

    /* Responsive phone */
    @media (max-width: 576px) {
      padding: 50px 0;
    }
  `;

  return (
    <Row className="row bg-dark">
      <Col xl={6} lg={6} md={12}>
        {/* There are Text component */}
        <Text />
      </Col>
      <Col xl={6} lg={6} md={12}>
        {/* There are Account component */}
        <Account />
      </Col>
    </Row>
  );
}
