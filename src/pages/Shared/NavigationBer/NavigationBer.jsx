import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const NavigationBer = () => {
    const { user,logOut } = useContext(AuthContext);
    useTitle('Catagory')
    const handleOut=()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/catacory/0'>Home</Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#caarer">Caarer</Nav.Link>
                        </Nav>
                        <Nav>

                            {user && <FaUserCircle style={{ fontSize: '2rem' }}>
                            </FaUserCircle>}

                            {
                                user ? <Button onClick={handleOut} variant="secondary">Logout</Button> :
                                    <Link to='/login'>
                                    <Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBer;