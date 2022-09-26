// React and other things
import React, { useState } from "react";

// React-bootstrap components
import { Button, Card, Col, Row } from "react-bootstrap";

// Styled component
import styled from "styled-components";

// Components
import Modals from "./Modals";

// data
const data = [
  {
    img: "https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg",
    header: {
      title: "Introduction to JavaScript",
      text1: "COURSES - 1",
      text2: <span className="text-secondary"> 6 LESSONS 1 HOUR 12 MIN</span>,
    },
    text: "In the time of God, pain is at the gate. Until the employee from pure as sometimes. Until someone gets a dignissim, the grief is free to decorate",
  },
  {
    img: "https://geeks-react.netlify.app/static/media/feature-icon-4.4e54d5c3aeac9d9d151971629ba18abf.svg",
    header: {
      title: "Types and Operators",
      text1: "COURSES - 4",
      text2: <span className="text-secondary"> 10 LESSONS 32 MIN</span>,
    },
    text: "I don't want to spend money on the campaign that I have spent on football advertising, nor on the hospital itself, but I have to spend time putting a quiver, lacinia from the players.",
  },
  {
    img: "https://geeks-react.netlify.app/static/media/feature-icon-2.35b3b77394deb3cd7ebf78b8464fab62.svg",
    header: {
      title: "JavaScript Beginning",
      text1: "COURSES - 2",
      text2: <span className="text-secondary"> 4 LESSONS 32 MIN</span>,
    },
    text: "Malesuada hunger and ugly need for the time of tincidunt. Some of the planning of the lake and the land will be followed.",
  },
  {
    img: "https://geeks-react.netlify.app/static/media/feature-icon-3.7cfb20a1964dfcd934da6b2267d68bc9.svg",
    header: {
      title: "Variables and Constants",
      text1: "COURSES - 3",
      text2: <span className="text-secondary"> 8 LESSONS 10 MIN</span>,
    },
    text: "Some pulvinar eros a ditur vitae diam emburdiet, nare turpis vequet elit nec, emburdiet lectuna liqum qs",
  },
];

// CustomCol styled component
const CustomCol = styled.div`
  /* Responsive media Tablet */
  @media (max-width: 768px) {
    h3,
    p {
      text-align: center !important;
    }
  }
`;

// React function component
export default function Cards() {
  // Modal Show State
  const [modalShow, setModalShow] = React.useState(false);

  // Modal Values State
  const [value, setValue] = useState({});

  return (
    <>
      {data.map((v, i) => (
        <Col
          key={i + "course-description"}
          lg={6}
          md={9}
          sm={12}
          className="d-dlex justify-content-center my-2 mx-auto  py-1"
        >
          <Card className="p-3 border-0 shadow-sm" style={{ height: "100%" }}>
            <Card.Body>
              <Row className="d-flex align-items-start">
                <Col sm={12} md={2} className="">
                  <div
                    style={{ width: "60px", height: "60px" }}
                    className="mx-auto rounded-circle d-dlex justify-content-center align-items-center bg-primary mb-2 "
                  >
                    <Card.Img src={v.img}></Card.Img>
                  </div>
                </Col>
                <CustomCol className="col col-sm-12 col-md-10">
                  {" "}
                  <h3 className="fw-bold">
                    <span>{v.header.title}</span>
                  </h3>{" "}
                  <p
                    className="text-dark"
                    style={{ fontSize: "13px", fontWeight: "700" }}
                  >
                    {v.header.text1}
                    {v.header.text2}
                  </p>
                </CustomCol>
              </Row>
              <Card.Text className="text-muted fw-normal">{v.text}</Card.Text>

              {/* Open and Close Modal Button */}
              <Button
                className="text-primary ps-0 fw-bold border-0"
                variant="link"
                onClick={() => {
                  setModalShow(true);
                  setValue({ v, i });
                }}
              >
                <u>View Chapter Details +</u>
              </Button>

              {/* There are Modal Component */}
              {modalShow && (
                <Modals
                  value={value}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
