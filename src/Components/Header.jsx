import React, { useContext } from 'react';
import { Button, Card, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { authContext } from '../Provider/AuthProvider';
import ibrahim from '../assets/ibrahim.jpeg'

const Header = () => {
 const {user} = useContext(authContext);
 console.log(user)
    return (
       <section>
        
        <Container>
           <Navbar className='' collapseOnSelect expand="lg"  variant="light" bg='light'>
          <Navbar.Brand href="#home">The Tasty Table
</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link style={{textDecoration: 'none'}} to="/">home</Link>
              <Nav.Link href="#pricing">blog</Nav.Link>
            </Nav>
            <Nav>
              <Link to="/login"><Button variant="secondary">login</Button></Link>

              <Image style={{height:'40px',width:'40px',marginLeft:'5px'}} src={ibrahim} roundedCircle />
            </Nav>
          </Navbar.Collapse>
      </Navbar>
        </Container>
        <Outlet></Outlet>
        
        <Footer></Footer>
       </section>
    );
};

export default Header;