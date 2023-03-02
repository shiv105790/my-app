import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, Stack, Form, Button } from 'react-bootstrap'
import logo from '../images/hirely-logo.png'
import brd_logo from '../images/logo.svg'
function Header() {
    return (

        <Container className="py-3">
            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand> */}
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={brd_logo}
                        className=""
                        style={{ width: " 40px", height: "40px" }}
                    />{' '}
                    <span style={{ color: "#41e0fd" }}>React Bootstrap</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="mt-2" >
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Add your item here..." />
                    <Button variant="secondary">Submit</Button>
                    <div className="vr" />
                    <Button variant="outline-danger">Reset</Button>
                </Stack>
            </div>
        </Container >
    );
}

export default Header;