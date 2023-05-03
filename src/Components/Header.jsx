import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
       <section>
        
        <Container>
           <Navbar className='' collapseOnSelect expand="lg"  variant="light" bg='light'>
          <Navbar.Brand href="#home">The Tasty Table
</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">home</Nav.Link>
              <Nav.Link href="#pricing">blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/blog">login</Nav.Link>
              <Link to="/blog">blog</Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
        </Container>
        <Outlet></Outlet>
       </section>
    );
};

export default Header;