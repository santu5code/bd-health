import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/home/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={Link} to="/patients">
              Patients
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/support">
              Support
            </Nav.Link>
            <button className="btn--nav">
              <span className="p-">GET STARTED</span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
