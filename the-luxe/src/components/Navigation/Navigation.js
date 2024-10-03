import React, { useContext } from "react"
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import { ProfileContext } from "../../contexts/ProfileContext"



const Navigation = ({isSignedIn, setIsSignedIn}) => {
  const element = <FontAwesomeIcon icon={faUser} />
  const { profileData } = useContext(ProfileContext);

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="logo">Luxe Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item" >HOME</Nav.Link>
            <Nav.Link as={Link} to="/rooms"className="nav-item" >ROOMS</Nav.Link>
            <Nav.Link as={Link} to={"/about"} className="nav-item">ABOUT</Nav.Link>
            {isSignedIn ? 
            <Nav.Link as={Link} to={"/book"} className="nav-item book">BOOK</Nav.Link>
            : <Nav.Link as={Link} to={"/signin"} className="nav-item book">BOOK</Nav.Link>}
            <NavDropdown 
            title={element} 
            id="basic-nav-dropdown" 
            className="nav-item fs-5"
            align="end">
              {isSignedIn ? 
              <>
                <NavDropdown.Item as={Link} to={`/profile/${profileData ? profileData.id : ""}`}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/reservations"}>
                  Reservations 
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/logout"}>
                  Logout 
                </NavDropdown.Item>
              </>
              :<> 
                <NavDropdown.Item as={Link} to={"/register"}>
                  Register
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/signin"}>
                  Sign in
                </NavDropdown.Item>
              </>
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;