
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Konti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Projects</Nav.Link>
            <Nav.Link href="">Contributors</Nav.Link>
            <Nav.Link href="">Contributions</Nav.Link>
            <Nav.Link href="">Pledges</Nav.Link>
            <Nav.Link href="">Make Contribution</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}