import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = ({ admin }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>SOS TECH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Quiz
              </Link>
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
              {admin && (
                <>
                  {" "}
                  <Link to="/form" className="nav-link">
                    Add Quiz
                  </Link>
                  <Link to="/score" className="nav-link">
                    Scores
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
