import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  let history = useNavigate()
  const logMeOut = () => {
    history('/')
  }
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard"><Nav.Link >Dashboard</Nav.Link></LinkContainer>
          <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
          <LinkContainer><Nav.Link onClick={logMeOut}>Logout</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};