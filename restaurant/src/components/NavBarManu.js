import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faPlus,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class NavBarManu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Restaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} color="gray"></FontAwesomeIcon>
                Home
              </Link>
              <Link to="/list">
                <FontAwesomeIcon icon={faList} color="gray"></FontAwesomeIcon>
                List
              </Link>
              <Link to="/create">
                <FontAwesomeIcon icon={faPlus} color="gray"></FontAwesomeIcon>
                Create
              </Link>
              <Link to="/search">
                <FontAwesomeIcon icon={faSearch} color="gray"></FontAwesomeIcon>
                Search
              </Link>
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} color="gray"></FontAwesomeIcon>
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBarManu;
