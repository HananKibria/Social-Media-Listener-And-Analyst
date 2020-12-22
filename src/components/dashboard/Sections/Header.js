import React, { useState } from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import logo from "../../../assets/favicon.png";
import Login from "../../auth/Login";
import Signup from "../../auth/Signup";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const style = {
    "background-color": "Transparent",
    "background-repeat": "no-repeat",
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <div className="container">
          <Navbar.Brand href="#">
            <img src={logo} alt="" width="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Features" id="collasible-nav-dropdown" className="p-2">
                <NavDropdown.Item href="sentimentanalysis">Sentiment Analysis</NavDropdown.Item>
                <NavDropdown.Item href="conversationcluster">Conversation Cluster</NavDropdown.Item>
                <NavDropdown.Item href="analytics">Analytics</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="collasible-nav-dropdown" className="p-2">
                <NavDropdown.Item href="blogs">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="reports">Reports</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="pricing" className="p-3">Pricing</Nav.Link>
              <Nav.Link href="aboutus" className="p-3">About Us</Nav.Link>
              <Nav.Link href="contact" className="p-3">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleShowLogin} as={Button} style={style} className="p-2">
                Login
              </Nav.Link>
              <Nav.Link eventKey={2} onClick={handleShowSignup} as={Button} style={style} className="p-2">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Login show={showLogin} handleClose={handleCloseLogin} />
      <Signup show={showSignup} handleClose={handleCloseSignup} />
    </div>
  );
}
