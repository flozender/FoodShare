import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

import { signInStart, signUpStart } from "../redux/user/user.actions";

import vars from "../vars";

const Share = ({ signInStart, signUpStart }) => {
  const [state, setState] = useState({
    name: "",
    description: "",
    long: "",
    lat: "",
    diet: "None",
    milk: false,
    egg: false,
    soy: false,
    gluten: false,
  });

  const { name, description, diet, milk, egg, soy, gluten } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create food
  };

  const handleChange = (event) => {
    var { value, name } = event.target;
    const allergens = ["milk", "soy", "gluten", "egg"];

    if (allergens.includes(name)) {
      value = !state[name];
    }

    setState({ ...state, [name]: value });
  };

  return (
    <div style={style_lc} className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit} style={formStyle}>
        <Card
          style={cardStyle}
          className="d-flex justify-content-center subtle-shadow"
        >
          <Card.Body className="pb-1">
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={4}>
                Food Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  aria-label="Name"
                  name="name"
                  value={name}
                  style={{ backgroundColor: vars.background }}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={4}>
                Description
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={handleChange}
                  aria-label="Name"
                  name="name"
                  value={name}
                  style={{ backgroundColor: vars.background }}
                  required
                />
              </Col>
            </Form.Group>
            <hr style={hrstyle} />
            <Form.Group>
              <Form.Label
                sm={15}
                style={{ fontSize: "0.8rem", marginBottom: "0" }}
              >
                Does the food contain any common allergens?
              </Form.Label>
              <br></br>
              <Form.Label
                sm={20}
                style={{
                  fontSize: "0.7rem",
                  fontStyle: "Open Sans",
                  textTransform: "initial",
                }}
              >
                Check all that apply
              </Form.Label>
            </Form.Group>
            <hr style={hrstyle} />
            <Form.Group>
              <Form.Label
                sm={15}
                style={{ fontSize: "0.8rem", marginBottom: "0" }}
              >
                Is The food suitable for any of the following diets?
              </Form.Label>
              <br></br>
              <Form.Label
                sm={20}
                style={{
                  fontSize: "0.7rem",
                  fontStyle: "Open Sans",
                  textTransform: "initial",
                }}
              >
                Check all that apply
              </Form.Label>
            </Form.Group>
          </Card.Body>
        </Card>
      </Form>
    </div>
  );
};

const style_lc = {
  // margin: "auto",
  padding: "10vh 20vw",
  background: `linear-gradient(to right, #e47274 0%, #f0a773 100%)`,
  minHeight: "120%",
  height: "120vh",
};

const cardStyle = {
  width: "40vw",
  // boxShadow: "1px 2px 1px 1px #f4decd",
  // height: "50vw",
  fontFamily: "Raleway",
  padding: "2rem",
};
const formStyle = {
  padding: "2rem 2rem 0 2rem",
  textTransform: "uppercase",
  fontFamily: "Raleway, sans-serif",
  fontWeight: "600",
  letterSpacing: "1px",
};

const buttonStyle = {
  borderRadius: "2rem",
  padding: "0.7rem 1rem",
  backgroundColor: "#dd2326",
  color: "white",
  boxShadow: "0px 6px #c5c5c5",
  width: "9rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const buttonStyle2 = {
  borderRadius: "2rem",
  padding: "0.7rem 1rem",
  color: `${vars.text}`,
  boxShadow: "0px 6px #c5c5c5",
  width: "9rem",
  textTransform: "uppercase",
  border: "0.2rem solid red",
  letterSpacing: "1px",
};
const hrstyle = {
  border: "0",
  height: "1px",
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))`,
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (data) => dispatch(signUpStart(data)),
  signInStart: (data) => dispatch(signInStart(data)),
});

export default connect(null, mapDispatchToProps)(Share);
