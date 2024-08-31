import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUser} />

function Menu() {
  
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="logo">The Luxe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links ms-auto">
            <Nav.Link href="#home" className="nav-item">HOME</Nav.Link>
            <Nav.Link href="#link" className="nav-item">ROOMS</Nav.Link>
            <Nav.Link href="#link" className="nav-item">ABOUT</Nav.Link>
            <Nav.Link href="#link" className="nav-item book">BOOK</Nav.Link>
            <NavDropdown title={element} id="basic-nav-dropdown" className="nav-item fs-5">
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

export default Menu;