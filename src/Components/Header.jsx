import React, { useContext } from 'react';
import { Button, Card, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { authContext } from '../Provider/AuthProvider';
import ibrahim from '../assets/ibrahim.jpeg'
import ActiveLink from './ActiveLink';

const Header = () => {
 const {user,logOut} = useContext(authContext);
 const handleLogOut = () =>{
  logOut()
  .then()
  .catch(error =>{
    console.log(error)
  })
 }
    return (
       <section>
       
        <Container>
           <Navbar className='' collapseOnSelect expand="lg"  variant="light" bg='light'>
          <Navbar.Brand href="#home">The Tasty Table
</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-2">
              <ActiveLink style={{textDecoration: 'none'}} to="/">home</ActiveLink>
              <ActiveLink to="/blog">blog</ActiveLink>
            </Nav>
            <Nav>
           
            {user ? <><Button onClick={handleLogOut} variant="danger">Logout</Button>
             
            <Image  style={{height:'40px',width:'40px',marginLeft:'5px'}} src={user.photoURL} roundedCircle /> </>  :
  <Link to="/login"><Button  variant="secondary">login</Button></Link>
    }

            </Nav>
            
          </Navbar.Collapse>
      </Navbar>
        </Container>
        <Outlet></Outlet>
        
        
       </section>
    );
};

export default Header;