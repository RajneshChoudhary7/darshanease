import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Onavbar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "teal" }} variant="dark">
      <Container>

        <Navbar.Brand as={Link} to="/shome">
          DarshanEase (Organizer)
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <Nav className="ms-auto align-items-center">

            <Nav.Link as={Link} to="/ohome">
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/mytemple">
              My Temple
            </Nav.Link>

            <Nav.Link as={Link} to="/odarshans">
              Darshans
            </Nav.Link>

            <Nav.Link as={Link} to="/bookings">
              Bookings
            </Nav.Link>

            <Nav.Link onClick={handleLogout}>
              Logout
            </Nav.Link>

            <span style={{ color: "white", marginLeft: "10px" }}>
              ({user?.name})
            </span>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Onavbar;