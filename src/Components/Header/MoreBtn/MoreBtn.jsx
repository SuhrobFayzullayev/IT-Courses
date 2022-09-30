// React and other things
import React from "react";

// Styled Component
import styled from "styled-components";

// React-bootstrap components
import { NavDropdown } from "react-bootstrap";
import { Item } from "../../../GlobalStyles/Item";

// icons
import { FiFileText, FiLayers, FiMoreHorizontal } from "react-icons/fi";

// data
const data = [
  {
    icon: <FiFileText />,
    title: "Documentations",
    text: "Browse the all documentation",
  },
  {
    icon: <FiLayers />,
    title: "Changelog",
    text: "See what's new",
  },
];

// Card styled comoponent
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover .second p {
    color: #754ffe;
  }
  .first {
    color: #754ffe;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 10px 15px 0;
  }

  .second {
    margin-top: 3px;
    h5 {
      font-size: 0.875rem;
      color: #565070;
      margin: 0;
      padding: 0;
    }

    p {
      padding: 0;
      margin: 0;
      color: #565070;
      font-size: 0.75rem;
    }
  }
`;

// MoreBtn function component
export default function MoreBtn() {
  return (
    <NavDropdown
      title={<FiMoreHorizontal />}
      id="basic-nav-dropdown"
      className="more-btn text-light"
    >
      {data.map((v, i) => (
        <Item
          className="dropdown-item d-flex"
          key={i + "more-btn"}
          href="#action/3.1"
        >
          <Card>
            <div className="first">{v.icon}</div>
            <div className="second">
              <h5>{v.title}</h5>
              <p>{v.text}</p>
            </div>
          </Card>
        </Item>
      ))}
    </NavDropdown>
  );
}
