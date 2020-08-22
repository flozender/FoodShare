import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import vars from "../vars";

import LogoWhite from "../assets/LogoWhitePNG.png";

export const Footer = () => (
  <Navbar expand="lg" style={navStyle}>
    <Navbar.Brand>
      <img width="50%" src={LogoWhite} alt="" />
    </Navbar.Brand>
    <Nav className="ml-auto" style={itemStyle}>
      <Nav.Item style={{ ...itemStyle }}>hello@foodshare.com</Nav.Item>
    </Nav>
    <Nav className="ml-auto" style={itemStyle}>
      <Nav.Item style={{ ...itemStyle }}>
        © 2020 FoodShare. All rights reserved.
      </Nav.Item>
    </Nav>
  </Navbar>
);

const navStyle = {
  background: vars.text,
  position: "absolute",
  right: "0",
  bottom: "0",
  left: "0",
  padding: "1rem",
};

const itemStyle = {
  textTransform: "uppercase",
  fontFamily: "Raleway, sans-serif",
  letterSpacing: "3px",
  fontSize: "0.5rem",
  color: "#747071",
};

export default Footer;
