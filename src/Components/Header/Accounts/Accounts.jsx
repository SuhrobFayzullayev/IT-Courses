// React and other things
import React from "react";

// React-bootstrap components
import { NavDropdown } from "react-bootstrap";
import { Item } from "../../../GlobalStyles/Item";

// data
const data = [
  {
    text: "Instructor",
  },
  {
    text: "Students",
  },
  {
    text: "Admin",
  },
  {
    text: <NavDropdown.Divider />,
  },
  {
    text: "Sign In",
  },
  {
    text: "Sign Up",
  },
  {
    text: "Forgot Password",
  },
  {
    text: "Edit Profile",
  },
  {
    text: "Security",
  },
  {
    text: "Social Profiles",
  },
  {
    text: "Notifications",
  },
  {
    text: "Privacy Settings",
  },
  {
    text: "Delete Profile",
  },
  {
    text: "Linked Accounts",
  },
];

// Accounts function component
export default function Accounts() {
  return (
    <NavDropdown
      title="Accounts"
      id="basic-nav-dropdown"
      className="text-light"
    >
      <Item className="dropdown-item disabled text-muted" href="#action/3.1">
        ACCOUNTS
      </Item>
      {data.map((v, i) => (
        <Item className="dropdown-item" key={i + "accounts"} href="#action/3.1">
          {v.text}
        </Item>
      ))}
    </NavDropdown>
  );
}
