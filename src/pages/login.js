import React, { useState } from "react";
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

const Login = () => {
  const [state, setState] = useState({
    show: true,
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const { show, username, password, name, confirmPassword } = state;

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
                    name="confirmPassword"
                    value={confirmPassword}
                  />
                </InputGroup>
              )}
              <Button variant="primary">Submit</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const style_lc = {
  width: "50vw",
  margin: "auto",
  padding: "10%",
};

export default Login;
