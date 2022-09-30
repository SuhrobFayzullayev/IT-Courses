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
    text: "Paths",
  },
  {
    text: "Blog",
  },
  {
    text: "Career",
  },
  {
    text: "Specialty",
  },
  {
    text: <NavDropdown.Divider />,
  },
  {
    text: "About",
  },
  {
    text: "Help Center",
  },
  {
    text: "Pricing",
  },
  {
    text: "Compare plan",
  },
  {
    text: "Contact",
  },
];

// Pages function component
export default function Pages() {
  return (
    <NavDropdown title="Pages" className="text-light" id="basic-nav-dropdown">
      {data.map((v, i) => (
        <Item className="dropdown-item" key={i + "pages"} href="#action/3.1">
          {v.text}
        </Item>
      ))}
    </NavDropdown>
  );
}
