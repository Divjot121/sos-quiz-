import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, NavbarToggler, Collapse, Nav } from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">
          SOS INFO TECH
        </Link>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Quiz
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/form" className="nav-link">
                Add Quiz
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
