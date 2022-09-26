// React-bootstrap components
import { Col, Accordion, Button } from "react-bootstrap";

// Styled component
import styled from "styled-components";

// icons
import { AiOutlinePlus } from "react-icons/ai";

// data
const data = [
  {
    title: "What is the cost of an online course",
    text: "Create beautiful website with this Geeks UI template. Get started building a site today.",
  },
  {
    title: "What do I need to take a course?",
    text: "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS",
  },
  {
    title: "What do I receive for taking this course?",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
  },
  {
    title: "What willI get if I subscribe to this Certificate?",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
  },
];

// React function component
export default function FAQ() {
  // Row styled component
  const Row = styled.div`
    h1 {
      font-weight: 700;
      font-size: 2.5rem;
    }

    .accordion {
      background-color: white !important;
      padding: 10px 20px !important;
      .accordion-header {
        background-color: rgb(255, 255, 255) !important;
        box-shadow: none !important;
        border: none;

        h5:hover {
          color: #754ffe !important;
        }
        .accordion-button {
          box-shadow: none !important;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0 !important;
          &::after {
            display: none;
          }

          &:not(.collapsed) {
            color: #18113c;
            border: none !important;
            background-color: white;
            box-shadow: none !important;
          }
          &:active {
            border: none !important;
          }
        }
      }
    }

    .help-center {
      color: #5c5776;
      &:hover {
        background-color: #f5f4f8;
        color: #5c5776;
      }
    }
  `;

  return (
    <>
      <Row className="text-center row">
        <Col className="mx-auto" md={7}>
          <h6 className="text-primary mt-5">NEED TO KNOW</h6>
          <h1 className="my-4 text-center text-dark">
            Frequently Asked Questions.
          </h1>
          <h5 className="fw-normal text-muted mb-5">
            The customer is very important, the customer will be followed by the
            customer. In the real estate, not the layer in, the time said
            neither.
          </h5>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center align-items-center row">
        <Col md={8} sm={10} lg={7} className="p-0">
          <Accordion className="mx-auto border-0">
            {data.map((v, i) => (
              <Accordion.Item
                key={i + "accordions"}
                className="border-0"
                eventKey={i}
              >
                <Accordion.Header className="bg-white border-bottom p-0 m-0 d-dlex justify-content-between align-items-center">
                  {" "}
                  <h5 className="p-0 m-0 fw-bold text-darks">{v.title}</h5>{" "}
                  <div>
                    <AiOutlinePlus className="text-primary fs-5" />
                  </div>{" "}
                </Accordion.Header>
                <Accordion.Body>{v.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
      <Row className="d-flex my-5 justify-content-center align-items-center">
        <Button variant="outline-white" className="border help-center">
          <p className="p-0 m-1 text-center text-dark-50 fw-bold">
            More questions? Visit the{" "}
            <span className="text-primary"> Learner Help Center.</span>
          </p>
        </Button>
      </Row>
    </>
  );
}
