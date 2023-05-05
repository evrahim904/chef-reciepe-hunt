import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col md={6} className="mb-3 mb-md-0">
              <h4>The Tasty Table</h4>
              <p>
              A great chef has to be passionate about food and cooking. They have to genuinely enjoy the whole process of procuring, preparing, cooking and serving food and have to be able to design menus too. Stamina: An essential quality of a true chef is stamina.
              </p>
            </Col>
            <Col md={3} sm={6} className="mb-3 mb-md-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                 <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/blog">blog</Link>
                </li>
              </ul>
            </Col>
            <Col md={3} sm={6}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="tel:555-555-5555">+8801904678904</a>
                </li>
                <li>
                  <a href="mailto:info@chefskitchen.com">info@tastytable.com</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;