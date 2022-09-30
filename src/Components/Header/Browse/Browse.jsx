// React and other things
import React from "react";

// React-bootstrap components
import { NavDropdown } from "react-bootstrap";
import { Item } from "../../../GlobalStyles/Item";

// data
const data = [
  {
    text: "Web Development",
  },
  {
    text: "Design",
  },
  {
    text: "Mobile App",
  },
  {
    text: "IT Software",
  },
  {
    text: "Marketing",
  },
  {
    text: "Misic",
  },
  {
    text: "Life Style",
  },
  {
    text: "Business",
  },
  {
    text: "Photography",
  },
];

// Browse function component
export default function Browse() {
  return (
    <NavDropdown title="Browse" className="text-light" id="basic-nav-dropdown">
      {data.map((v, i) => (
        <Item className="dropdown-item" key={i + "browse"} href="#action/3.1">
          {v.text}
        </Item>
      ))}
    </NavDropdown>
  );
}
