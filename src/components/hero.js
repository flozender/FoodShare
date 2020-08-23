import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selector";
import { Nav, Navbar, Container, Row, Col, Button } from "react-bootstrap";
import vars from "../vars";

import HeroImage from "../assets/hero.jpg";
import IconWhite from "../assets/IconWhite.png";

export const Hero = ({ currentUser }) => {
  return (
    <>
      <Container fluid style={style} className="d-flex align-items-center">
        <Col>
          <Row>
            <Col className="d-flex justify-content-center text-center py-3">
              <img src={IconWhite} alt="" />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center text-center ">
              <p>Sharing Food So It</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center text-center ">
              <p>Doesn't Go To Waste</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center text-center ">
              <h6
                style={{
                  opacity: "0.7",
                  fontStyle: "italic",
                  fontWeight: "600",
                }}
              >
                From Those Who Have To Those In Need.
              </h6>
            </Col>
          </Row>
          <Row className="py-3 d-flex justify-content-center">
            {currentUser ? (
              <Row className="py-3 d-flex justify-content-center">
                <Col className="d-flex  text-center py-4">
                  <Button
                    variant="outline-danger"
                    style={buttonStyle}
                    href="/share"
                  >
                    Share Food
                  </Button>
                </Col>
                <Col className="d-flex  text-center py-4">
                  <Button
                    variant="outline-danger"
                    style={{ ...buttonStyle, backgroundColor: "#ef7c24" }}
                    href="/find"
                  >
                    Find Food
                  </Button>
                </Col>
              </Row>
            ) : (
              <Col className="d-flex justify-content-center text-center py-4">
                <Button
                  variant="outline-danger"
                  style={buttonStyle}
                  href="/signin"
                >
                  Get Started
                </Button>
              </Col>
            )}
          </Row>
        </Col>
      </Container>
    </>
  );
};

const style = {
  height: "85vh",
  backgroundSize: "cover",
  overflow: "hidden",
  //   justifyContent: "center",
  fontFamily: "Raleway",
  color: "white",
  letterSpacing: "3px",
  fontSize: "3rem",
  fontWeight: "800",
  backgroundImage: `linear-gradient(to bottom,  rgba(220, 37, 38, 0.6), rgba(239, 124, 36, 0.6)),url(${HeroImage})`,
};

const buttonStyle = {
  borderRadius: "2rem",
  padding: "0.7rem 1rem",
  backgroundColor: "#dd2326",
  color: "white",
  boxShadow: "0px 6px black",
  width: "12rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(Hero);
