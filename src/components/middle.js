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
              fontSize: "2.5rem",
              fontWeight: "900",
            }}
          >
            Connecting Local Communities, Allowing Them to Share Food
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center">
            <p
              style={{
                fontSize: "1.3rem",
                fontWeight: "400",
                fontStyle: "italic",
                width: "70%",
              }}
            >
              With so much food going to waste daily, FoodShare is a much-needed
              solution.{" "}
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center ">
            <p
              style={{
                opacity: "0.7",
                fontWeight: "600",
                lineHeight: "2",
                fontSize: "1rem",
              }}
            >
              Covid-19 crisis has led to an economic downturn worldwide with a
              lot of people losing their jobs and no end in sight. There is a
              great need for distribution of food in our communities, for those
              who have it to share it with those who do not On the other hand,
              there is also the existing issue of food going to waste every day
              from restaurants, stores, and individuals, but no system available
              for them to easily share it before it spoils. This is where
              FoodShare FoodShare comes in as a user friendly solution that
              makes sharing food in communities easy and efficient. Simply sign
              up and start sharing!
            </p>
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
  backgroundColor: "white",
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
