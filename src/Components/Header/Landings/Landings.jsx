// React and other things
import React from "react";

// React-bootstrap components
import { NavDropdown } from "react-bootstrap";
import { Item } from "../../../GlobalStyles/Item";

// data
const data = [
  {
    text: "Courses",
  },
  {
    text: "Lead Course",
  },
  {
    text: "Request Access",
  },
  {
    text: "SaaS",
  },
];

// Landings function Component
export default function Landings() {
  return (
    <NavDropdown
      title="Landings"
      id="basic-nav-dropdown"
    >
      <Item className="dropdown-item disabled text-muted" href="#action/3.1">
        LANDINGS
      </Item>
      {data.map((v, i) => (
        <Item className="dropdown-item" key={i + "landings"} href="#action/3.1">
          {v.text}
        </Item>
      ))}
    </NavDropdown>
  );
}
