import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Unavbar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <Navbar expand="lg" style={{ backgroundColor: "teal" }} variant="dark">

      <Container>

        <Navbar.Brand>

          <Link
            to="/uhome"
            style={{ color: "white", textDecoration: "none" }}
          >
            Darshan-Ease
          </Link>

        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <Nav className="ms-auto">

            <Link
              to="/uhome"
              style={{ padding: "10px", color: "white", textDecoration: "none" }}
            >
              Home
            </Link>

            <Link
              to="/utemples"
              style={{ padding: "10px", color: "white", textDecoration: "none" }}
            >
              Temples
            </Link>

            <Link
              to="/mybookings"
              style={{ padding: "10px", color: "white", textDecoration: "none" }}
            >
              My Bookings
            </Link>

            <span
              onClick={handleLogout}
              style={{
                padding: "10px",
                color: "white",
                cursor: "pointer"
              }}
            >
              Logout
            </span>

            <span style={{ color: "white", padding: "10px" }}>
              ({user?.name})
            </span>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );

};

export default Unavbar;