import React from "react"
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

const element = <FontAwesomeIcon icon={faUser} />

const Navigation = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="logo">Luxe Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item" >HOME</Nav.Link>
            <Nav.Link as={Link} to="/rooms"className="nav-item" >ROOMS</Nav.Link>
            <Nav.Link href="#link" className="nav-item">ABOUT</Nav.Link>
            <Nav.Link href="#link" className="nav-item book">BOOK</Nav.Link>
            <NavDropdown 
            title={element} 
            id="basic-nav-dropdown" 
            className="nav-item fs-5"
            align="end">
              <NavDropdown.Item href="#action/3.1">
                Register
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sign in
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;