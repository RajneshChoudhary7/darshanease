import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Anavbar = () => {

  const get = localStorage.getItem("user");
  const user = get ? JSON.parse(get) : null;

  return (

    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "teal" }}>

      <Container>

        <Navbar.Brand as={Link} to="/ahome">
          DarshanEase (Admin)
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <Nav className="ms-auto align-items-center">

            <Nav.Link as={Link} to="/ahome">
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>

            <Nav.Link as={Link} to="/organizers">
              Organizers
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              Logout
            </Nav.Link>

            <span style={{ color: "white", marginLeft: "10px", fontWeight: "bold" }}>
              ({user?.name})
            </span>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
};

export default Anavbar;