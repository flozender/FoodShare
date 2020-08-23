import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
import { selectCurrentUser } from "../redux/user/user.selector";

import vars from "../vars";
import { foodCreateStart } from "../redux/food/food.actions";

const Share = ({ signInStart, signUpStart, currentUser, createFood }) => {
  const [state, setState] = useState({
    name: "",
    description: "",
    long: "",
    lat: "",
    date: "",
    milk: false,
    egg: false,
    soy: false,
    gluten: false,
    halal: false,
    kosher: false,
    vegan: false,
    vegetarian: false,
    keto: false,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lg = position.coords.longitude;
        var lt = position.coords.latitude;
        setState({ ...state, long: lg, lat: lt });
      });
    } else {
      alert("Please enable your location!");
    }
  });

  const {
    name,
    date,
    description,
    diet,
    milk,
    egg,
    soy,
    gluten,
    halal,
    keto,
    vegan,
    vegetarian,
    kosher,
    long,
    lat,
  } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    var response = {
      name,
      description,
      expiresOn: date,
      host: currentUser.email,
      long,
      lat,
      diet: [halal, kosher, vegan, vegetarian, keto],
      allergens: [soy, milk, gluten, egg],
      token: currentUser.token,
    };
    console.log(response);
    createFood(response);
  };

  const handleChange = (event) => {
    var { value, name } = event.target;

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
            <Form.Group as={Row} controlId="formHorizontalDescription">
              <Form.Label column sm={4}>
                Description
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={handleChange}
                  aria-label="Description"
                  name="description"
                  value={description}
                  style={{ backgroundColor: vars.background }}
                />
              </Col>
            </Form.Group>
            <hr style={hrstyle} />
            <Form.Group>
              <Form.Label
                sm={15}
                style={{ fontSize: "0.7rem", marginBottom: "0" }}
              >
                Does the food contain any common allergens?
              </Form.Label>
              <br></br>
              <Form.Label
                sm={20}
                style={{
                  fontSize: "0.6rem",
                  fontStyle: "Open Sans",
                  textTransform: "initial",
                }}
              >
                Check all that apply
              </Form.Label>
              <br></br>
              <Row className="d-flex justify-content-center align-items-center py-2">
                <Button
                  variant={soy ? "success" : "light"}
                  style={buttonStyle2}
                  onClick={() => setState({ ...state, soy: !soy })}
                >
                  Soy
                </Button>
                <Button
                  variant={milk ? "success" : "light"}
                  style={buttonStyle2}
                  onClick={() => setState({ ...state, milk: !milk })}
                >
                  Milk
                </Button>
                <Button
                  variant={gluten ? "success" : "light"}
                  style={buttonStyle2}
                  onClick={() => setState({ ...state, gluten: !gluten })}
                >
                  Gluten
                </Button>
                <Button
                  variant={egg ? "success" : "light"}
                  style={buttonStyle2}
                  onClick={() => setState({ ...state, egg: !egg })}
                >
                  Eggs
                </Button>
              </Row>
            </Form.Group>
            <hr style={hrstyle} />
            <Form.Group>
              <Form.Label
                sm={15}
                style={{ fontSize: "0.7rem", marginBottom: "0" }}
              >
                Is The food suitable for any of the following diets?
              </Form.Label>
              <br></br>
              <Form.Label
                sm={20}
                style={{
                  fontSize: "0.6rem",
                  fontStyle: "Open Sans",
                  textTransform: "initial",
                }}
              >
                Check all that apply
              </Form.Label>
              <br></br>
              <Row className="d-flex justify-content-center align-items-center py-2">
                <Button
                  variant={halal ? "success" : "light"}
                  style={buttonStyle3}
                  onClick={() => setState({ ...state, halal: !halal })}
                >
                  Halal
                </Button>
                <Button
                  variant={kosher ? "success" : "light"}
                  style={buttonStyle3}
                  onClick={() => setState({ ...state, kosher: !kosher })}
                >
                  Kosher
                </Button>
                <Button
                  variant={vegan ? "success" : "light"}
                  style={buttonStyle3}
                  onClick={() => setState({ ...state, vegan: !vegan })}
                >
                  Vegan
                </Button>
                <Button
                  variant={vegetarian ? "success" : "light"}
                  style={buttonStyle3}
                  onClick={() =>
                    setState({ ...state, vegetarian: !vegetarian })
                  }
                >
                  Vegetarian
                </Button>
                <Button
                  variant={keto ? "success" : "light"}
                  style={buttonStyle3}
                  onClick={() => setState({ ...state, keto: !keto })}
                >
                  Keto
                </Button>
              </Row>
            </Form.Group>
            <hr style={hrstyle} />
            <Form.Group>
              <Form.Label
                sm={15}
                style={{ fontSize: "0.7rem", marginBottom: "0" }}
              >
                Until when will the food keep?
              </Form.Label>
              <br></br>
              <Form.Label
                sm={20}
                style={{
                  fontSize: "0.6rem",
                  fontStyle: "Open Sans",
                  textTransform: "initial",
                }}
              >
                We'll automatically delete it if it isn't picked up by then.
              </Form.Label>
              <br></br>
              <Form.Group
                as={Row}
                controlId="formHorizontalName"
                className="py-2"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ fontSize: "0.8rem" }}
                  className="d-flex align-items-center"
                >
                  Date
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="date"
                    onChange={handleChange}
                    aria-label="Date"
                    name="date"
                    value={date}
                    style={{ backgroundColor: vars.background }}
                    required
                  />
                </Col>
              </Form.Group>
            </Form.Group>
            <Col className="d-flex justify-content-center pt-3">
              <Row>
                <Col>
                  <Button
                    variant="outline-danger"
                    // disabled={disable}
                    type="submit"
                    style={buttonStyle}
                  >
                    Share
                  </Button>
                </Col>
              </Row>
            </Col>
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
  minHeight: "130%",
  height: "130vh",
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
  borderRadius: "0.7rem",
  padding: "0.6rem 0.3rem",
  width: "5rem",
  fontSize: "0.8rem",
  margin: "0 1rem",
};

const buttonStyle3 = {
  borderRadius: "0.7rem",
  padding: "0.7rem 0.3rem",
  width: "5rem",
  fontSize: "0.8rem",
  margin: "0 0.4rem",
};

const hrstyle = {
  border: "0",
  height: "1px",
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))`,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  createFood: (payload) => dispatch(foodCreateStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Share);
