import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, MMMM Do YYYY')}</p>
            </div>
            <div className='d-flex text-danger'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#caarer">Caarer</Nav.Link>
                            </Nav>
                            <Nav>
                            <Nav.Link href="#demo">Profile</Nav.Link>
                                <Button variant="secondary">Login</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;