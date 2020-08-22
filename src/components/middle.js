import React from "react";
import { Nav, Navbar, Container, Row, Col, Button } from "react-bootstrap";
import vars from "../vars";

export const Middle = () => {
  return (
    <Container
      fluid
      style={style}
      className="d-flex align-items-center m-auto "
    >
      <Col>
        <Row>
          <Col
            className="d-flex justify-content-center text-center"
            style={{
              fontSize: "3rem",
              fontWeight: "900",
            }}
          >
            This is the Section Headline, Continues to Two Lines
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center">
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                fontStyle: "italic",
                width: "70%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center ">
            <h6
              style={{
                opacity: "0.7",
                fontWeight: "600",
                lineHeight: "2",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum non nisl placerat mi mattis eleifend. Morbi libero
              nisl, sodales sed viverra nec, elementum vitae odio. Sed orci
              arcu, lacinia a condimentum ut, mattis eu tellus. Aenean sagittis
              ipsum non tempus volutpat. Aliquam interdum lacinia ligula,
              faucibus egestas ligula mattis ac.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center py-4">
            <Button variant="outline-danger" style={buttonStyle} href="/">
              Read More
            </Button>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

const style = {
  height: "85vh",
  width: "50%",
  //   justifyContent: "center",
  fontFamily: "Raleway",
  color: vars.text,
  fontSize: "2rem",
};

const buttonStyle = {
  borderRadius: "2rem",
  padding: "0.7rem 1rem",
  backgroundColor: "#dd2326",
  color: "white",
  boxShadow: "0px 6px black",
  width: "8rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "0.7rem",
};

// const colStyle = {
//   width: "50%",
//   overflow: "wrap",
// };

export default Middle;
