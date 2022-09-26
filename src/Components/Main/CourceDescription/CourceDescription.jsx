// React-bootstrap components
import { Row } from "react-bootstrap";

// Components
import Cards from "./Cards";
import Title from "./Title";

// React function component
export default function CourceDescription() {
  return (
    <Row className="py-5 px-0 bg-light">
      {/* There are Title Component */}
      <Title />

      {/* There are Title Component */}
      <Cards />
    </Row>
  );
}
