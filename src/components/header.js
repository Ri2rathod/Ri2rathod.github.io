// import {  } from 'bootstrap';
import React from 'react'
import logo from '../assets/images/logo.png';
import {  Container, Nav ,Navbar ,Button} from 'react-bootstrap';
function header() {
    return (
        <header>
               <Navbar bg="light" expand="lg">
                    <Container >
                        <Navbar.Brand href="#home"> <img src={logo} alt="logo" /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav " className=" flex-grow-0">
                        <Nav className="mr-auto ">
                            <Nav.Link href="#home" className="mx-md-4 mx-2 text-primary">Home</Nav.Link>
                            <Nav.Link href="#link" className="mx-md-4 mx-2 text-primary">Link</Nav.Link>
                            <Nav.Link href="#link" className="mx-md-4 mx-2 text-primary">About Us</Nav.Link>
                            <Button className="mx-md-4 mx-2"> Work</Button>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
        </header>
    )
}

export default header
