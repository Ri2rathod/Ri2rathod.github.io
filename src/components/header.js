// import {  } from 'bootstrap';
import React from 'react'
import Hamburger from './hamburger';
import logo from '../assets/images/logo.png';
import {  Container, Nav ,Navbar } from 'react-bootstrap';
function header() {
    return (
               <Navbar bg="white" expand="lg" fixed="top" className="shadow"> 
                    <Container >
                        <Navbar.Brand href="./index" className=""> <img src={logo} alt="logo" className="img-fluid logo_img"/> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
                            <Hamburger />

                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav " className=" flex-grow-0">
                        <Nav className="mr-auto ">
                            <Nav.Link href="./index" className="mx-md-3 mx-2 text-primary">
                                <h5>Home</h5>
                                </Nav.Link>
                            <Nav.Link href="./Services" className="mx-md-3 mx-2 text-primary">
                                 <h5> Services </h5> </Nav.Link>
                            <Nav.Link href="#link" className="mx-md-3 mx-2 text-primary">
                                 <h5>About Us</h5> 
                            </Nav.Link>
                            <Nav.Link href="#link" className="mx-md-3 mx-2 text-primary"> 
                                <h5>Blogs</h5> 
                            </Nav.Link>
                            <Nav.Link href="#link" className="mx-md-3 mx-2 text-primary bg-secondary rounded btn px-3">
                                 <h5>Work</h5>
                             </Nav.Link>
                      
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
    )
}

export default header
