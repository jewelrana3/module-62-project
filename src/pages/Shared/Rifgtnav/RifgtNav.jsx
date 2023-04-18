import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RifgtNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google </Button><br />
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item><FaFacebook></FaFacebook > Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twiter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instragram</ListGroup.Item>
                    
                </ListGroup>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default RifgtNav;
