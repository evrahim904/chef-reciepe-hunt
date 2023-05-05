import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import './Login.css'

const Login = () => {
    const {signIn,signInWIthGoogle,signInWithGit} = useContext(authContext);
    const navigate = useNavigate()
    const [error, setError] = useState()
    const location = useLocation();
    const from = location.state?.from?.pathname || './'

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

// ***/ validation/***/
       if(password.length < 6){
        setError('password should be 6 character')
       }
       if (!email || email.length === 0) {
        setError( 'Email cannot be empty');
      }
       if (!password || password.length === 0) {
        setError( 'password cannot be empty');
      }
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            event.target.reset()
         
            navigate(from)
          
           
        })
        .catch(error =>{
          console.log(error.message)
        })
    }
    const handlSignIn = () =>{
      signInWIthGoogle()
      useEmailValidation()
    }
    const handleSignInGit = () =>{
      signInWithGit()
    }
    return (
     <Container className='login' style={{width:'30%',}}>
        <h1>Please Login</h1>
          <Form onSubmit={handleLogin} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password"  />
      </Form.Group>
      <Button style={{width:'100%'}} variant="primary" type="submit">
        Login
      </Button>
   <br />
      <Form.Text className="text-secondary">
         new to Tasty Table? Create account.<Link to="/register">Register</Link>
        </Form.Text>
        <hr className='mb-2' /> 
      <Form.Text className="text-danger">
        {error}
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