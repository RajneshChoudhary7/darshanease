import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Unavbar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "teal" }} variant="dark">
      <Container>

        <Navbar.Brand as={Link} to="/uhome">
          Darshan-Ease
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>

          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/uhome">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/utemples">
              Temples
            </Nav.Link>

            <Nav.Link as={Link} to="/mybookings">
              My Bookings
            </Nav.Link>

            <Nav.Link onClick={logout}>
              Logout
            </Nav.Link>

            {user && (
              <Nav.Link disabled>
                👤 {user.name}
              </Nav.Link>
            )}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;