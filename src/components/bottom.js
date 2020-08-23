import React from "react";
import { Nav, Navbar, Container, Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faAppleAlt,
  faPepperHot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import vars from "../vars";

import HeartIcon from "../assets/HeartIconSnip.png";

export const Bottom = () => {
  return (
    <Container fluid style={style} className="d-flex align-items-center">
      <Col>
        <Row>
          <Col className="d-flex justify-content-center text-center py-3">
            <img src={HeartIcon} alt="" width="9%" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center ">
            <p>Our Community</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center ">
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                fontStyle: "italic",
                width: "30%",
              }}
            >
              Everyone can join and offer a helping hand. All parties are
              enriched by the experience.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center text-center flex-column "
            style={cardStyle}
          >
            <Row>
              <FontAwesomeIcon icon={faPizzaSlice} style={iconStyle} />
            </Row>
            <Row style={headStyle}>RESTAURANTS</Row>
            <Row style={textStyle}>Share extra ingredients or meals that were not picked up.</Row>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center text-center flex-column  "
            style={cardStyle}
          >
            <Row>
              <FontAwesomeIcon icon={faAppleAlt} style={iconStyle} />
            </Row>
            <Row style={headStyle}>GROCERY STORES</Row>
            <Row style={textStyle}>Do not let grocery go past its expiration date.</Row>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center text-center flex-column "
            style={cardStyle}
          >
            <Row>
              <FontAwesomeIcon icon={faPepperHot} style={iconStyle} />
            </Row>
            <Row style={headStyle}>HOME COOKS</Row>
            <Row style={textStyle}>Share leftower meals or ingrediants you cannot use up.</Row>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center text-center flex-column  "
            style={cardStyle}
          >
            <Row>
              <FontAwesomeIcon icon={faUtensils} style={iconStyle} />
            </Row>
            <Row style={headStyle}>PEOPLE IN NEED</Row>
            <Row style={textStyle}>See what is available in your local area.</Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

const style = {
  height: "90vh",
  overflow: "hidden",
  //   justifyContent: "center",
  fontFamily: "Raleway",
  color: vars.text,
  fontSize: "3rem",
  fontWeight: "800",
  backgroundColor: vars.background,
};

const cardStyle = {
  fontSize: "1rem",
  height: "20vh",
  padding: "1rem",
};

const textStyle = {
  fontSize: "0.8rem",
  padding: "0.2rem",
  fontWeight: "400",
};

const headStyle = { padding: "1rem 0rem 0.5rem 0rem" };

const iconStyle = { fontSize: "2rem" };

export default Bottom;
