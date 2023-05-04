import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn,signInWIthGoogle,signInWithGit} = useContext(authContext);
    const navigate = useNavigate()
    const handleLogin = event =>{
        
        event.preventDefault()
       
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            event.target.reset()
           navigate('/')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const handlSignIn = () =>{
      signInWIthGoogle()
      
    }
    const handleSignInGit = () =>{
      signInWithGit()
    }
    return (
     <Container style={{width:'30%',}}>
        <h1>Please Login</h1>
          <Form onSubmit={handleLogin} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Button style={{width:'100%'}} variant="primary" type="submit">
        Login
      </Button>
   <br />
      <Form.Text className="text-secondary">
         new to Tasty Table? Create account.<Link to="/register">Register</Link>
        </Form.Text>
        <hr /> 
       
      <Form.Text className="text-danger">
        </Form.Text>
        <Form.Text className="text-success">
        </Form.Text>
    </Form>
    <Button onClick={handlSignIn} style={{width:'100%',marginBottom:'5px'}} variant="info" type="submit">
        continue with google
      </Button>
      <Button onClick={handleSignInGit} style={{width:'100%'}} variant="dark" type="submit">
      continue with Github
      </Button>
     </Container>
    );
};

export default Login;