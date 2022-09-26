// React and hooks
import React from "react";

// icons
import { FaBars } from "react-icons/fa";

// React-bootstrap components
import {
  Row,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

// Components
import Browse from "./Browse";
import Landings from "./Landings/Landings";
import Pages from "./Pages";
import Accounts from "./Accounts";
import MoreBtn from "./MoreBtn";
import Search from "./Search";
import Buttons from "./Buttons";

// Header function component
export default function Header() {
  return (
    <Row>
      <Navbar fixed="top" bg="dark" expand="lg">
        <Container fluid="xl">
          {/* There are logo */}
          <Navbar.Brand href="#home">
            <img
              className="mb-1 logo"
              src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"
              alt=""
            />
          </Navbar.Brand>

          {/* There are responsive toggler btn */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="p-1 border border-white pt-0"
            children={<FaBars className="text-white" />}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* There are Browse component */}
              <Browse />

              {/* There are Landings component */}
              <Landings />

              {/* There are Pages Component */}
              <Pages />

              {/* There are Accounts Component */}
              <Accounts />

              {/* There are MoreBtn Component */}
              <MoreBtn />

              {/* There are Search Component */}
              <Search />
            </Nav>
            <Nav className="d-flex align-items-end">
              {/* There are Buttons Component */}
              <Buttons />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}
