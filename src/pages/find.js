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

const Find = ({ signInStart, signUpStart }) => {
  const [state, setState] = useState({
    show: true,
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    ssn: "",
    phone: "",
  });

  const { show, email, password, name, confirmPassword, phone, ssn } = state;
  var disable = true;
  if (show) {
    // if sign-in page
    if (email !== "" && password !== "") {
      disable = false;
    }
  } else {
    // if sign-up page
    if (
      email !== "" &&
      password !== "" &&
      password === confirmPassword &&
      name !== ""
    ) {
      disable = false;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    var data;
    if (show) {
      data = { email, password };
      console.log(data);
      signInStart(data);
    } else {
      data = { name, email, password, ssn, phone };
      console.log("SDDSDD", data);

      signUpStart(data);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };

  return <div style={style_lc} className="d-flex justify-content-center"></div>;
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

export default connect(null, mapDispatchToProps)(Find);
