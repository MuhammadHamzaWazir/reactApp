import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  login() {
    console.warn(this.state);
    // eslint-disable-next-line eqeqeq
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          console.warn(this.props.history.push("list"));
        } else {
          alert("Please check username and password");
        }
      });
    });
  }

  render() {
    return (
      <Container>
        <Form.Control
          type="text"
          name="user"
          onChange={(event) => this.setState({ name: event.target.value })}
          placeholder="Username"
        ></Form.Control>{" "}
        <br />
        <br />
        <Form.Control
          type="Paasword"
          name="password"
          onChange={(event) => this.setState({ password: event.target.value })}
          placeholder="Password"
        ></Form.Control>{" "}
        <br />
        <br />
        <button
          onClick={() => {
            this.login();
          }}
        >
          Login
        </button>
      </Container>
    );
  }
}

export default Login;
