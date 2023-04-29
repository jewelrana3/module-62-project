import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext)
   const  Navigate = useNavigate()

    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
       
        const email = form.email.value;
        const password = form.password.value;

        console.log( email, password)
        signIn(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                 Navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-muted">
                    Have New Account Now
                    <Link to='/register'> Register</Link><br />
                </Form.Text>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </Container>
    );
};

export default Login;