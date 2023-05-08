import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accept, setAccept] = useState(false)
    useTitle('Register')
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
   const handleCheck=event=>{
    setAccept(event.target.checked)
   }
    return (
        <Container className='w-25 mx-auto'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="D">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="C">
                    <Form.Check
                        onClick={handleCheck}
                        type="checkbox"
                        name='accept'
                        label="Check me out" />
                </Form.Group>
                <Form.Text className="text-muted">
                    Already Account Now?
                    <Link to='/login'> Login</Link><br />
                </Form.Text>

                <Button disabled={!accept} variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </Container>
    );
};

export default Register;