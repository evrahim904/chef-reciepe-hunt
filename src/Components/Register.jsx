import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Register = () => {
    const {creatUser,updateUserData} = useContext(authContext)
    const navigate = useNavigate()
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,password,photo)
        creatUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(creatUser)
            updateUserData(result.user, name ,photo)
            event.target.reset()
            navigate('/')
        })
        .catch(error =>{

            console.log(error.message)
        })
    }
   

    return (
        <Container style={{width:'30%',}}>
        <h1>Registration</h1>
          <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
      <Form.Label>Your name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        
      <Form.Label>Photo url</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
       Register
      </Button>
   <br />
      <Form.Text className="text-secondary">
         Already have Account? Please.<Link to="/login">Login</Link>
        </Form.Text>
      <Form.Text className="text-danger">
        </Form.Text>
        <Form.Text className="text-success">
        </Form.Text>
    </Form>
     </Container>
    );
};

export default Register;