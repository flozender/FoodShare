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
} from "react-bootstrap";

import { signInStart, signUpStart } from "../redux/user/user.actions";

const Login = () => {
  const [state, setState] = useState({
    show: true,
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const { show, username, password, name, confirmPassword } = state;
  var disable = true;
  if (show) {
    // if sign-in page
    if (username !== "" && password !== "") {
      disable = false;
    }
  } else {
    // if sign-up page
    if (
      username !== "" &&
      password !== "" &&
      password === confirmPassword &&
      name !== ""
    ) {
      disable = false;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (show) {
      signInStart(username, password);
    } else {
      signUpStart(username);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <Container style={style_lc}>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#signin">
                <Nav.Item>
                  <Nav.Link
                    href="#signin"
                    onClick={() => setState({ ...state, show: true })}
                  >
                    Sign In
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#signup"
                    onClick={() => setState({ ...state, show: false })}
                  >
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>{show ? "Welcome Back!" : "Hello!"}</Card.Title>
              <Card.Text>
                {show
                  ? "Sign in to your account to continue."
                  : "Create an account below to start sharing!"}
              </Card.Text>
              {show ? null : (
                <InputGroup className="mb-3">
                  <FormControl
                    onChange={handleChange}
                    placeholder="Name"
                    aria-label="Name"
                    name="name"
                    value={name}
                  />
                </InputGroup>
              )}
              <InputGroup className="mb-3">
                <FormControl
                  onChange={handleChange}
                  placeholder="Email"
                  aria-label="Email"
                  name="username"
                  value={username}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  onChange={handleChange}
                  placeholder="Password"
                  aria-label="Password"
                  type="password"
                  name="password"
                  value={password}
                />
              </InputGroup>
              {show ? null : (
                <InputGroup className="mb-3">
                  <FormControl
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    aria-label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                  />
                </InputGroup>
              )}
              <Button
                variant="primary"
                disabled={disable}
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const style_lc = {
  margin: "auto",
  padding: "5%",
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (data) => dispatch(signUpStart(data)),
  signInStart: (email, password) => dispatch(signInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
