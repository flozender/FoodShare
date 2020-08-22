import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import vars from "../vars";

import { ReactComponent as LogoRed } from "../assets/LogoRed.svg";

export const TopBar = () => (
  <>
    <Navbar expand="lg" fixed="top" style={navStyle}>
      <Nav className="ml-auto mr-lg-5" style={itemStyle}>
        <Nav.Item>
          <Nav.Link style={{ ...itemStyle, color: "white" }} href="/signin">
            Sign In / Sign Up
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    <Navbar expand="lg" style={navStyle2}>
      <Navbar.Brand className="ml-lg-5" href="/">
        <LogoRed style={{ width: "7rem" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-tog" />

      <Navbar.Collapse id="navbar-tog">
        <Nav className="mx-lg-3">
          <Nav.Item>
            <Nav.Link href="/about" style={itemStyle}>
              About Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="mx-lg-3">
          <Nav.Item>
            <Nav.Link href="/contact" style={itemStyle}>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

const navStyle = {
  background: `linear-gradient(to right, #dc2526 0%, #ef7c24 100%)`,
  fontSize: "1rem",
};
const navStyle2 = {
  //   backgroundColor: "blue",
  marginTop: "56px",
};
const itemStyle = {
  textTransform: "uppercase",
  fontFamily: "Raleway, sans-serif",
  letterSpacing: "3px",
  fontSize: "1rem",
  color: vars.text,
};
export default TopBar;
