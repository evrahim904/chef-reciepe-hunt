import React, { useState } from 'react';
import { Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaThumbsUp,FaRegStar,FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActiveLink from '../Components/ActiveLink';
import LazyLoad from 'react-lazy-load';

const Recipes = () => {
    const chefInfo = useLoaderData()
    console.log(chefInfo)
    const ingrident = chefInfo.recipes[0].ingredients;
    console.log(ingrident)

  
    


  const handleClick = (event) => {
    event.currentTarget.disabled = true;
    toast("added as favorite")
  };
    return (
        
        <Container>
        <div style={{position:'relative'}} className="jumbotron">
            <div  className='rounded d-flex justify-content-center'>
         
   <LazyLoad >
        <Card.Img className='rounded' style={{width:'700px',}} src={chefInfo.image} />
        </LazyLoad>
            </div>
  <hr className="my-4" />
  <div  className='bg-info rounded px-2 py-2 text-center '>
              <h2><span><strong>Name:</strong></span> {chefInfo.name}</h2>
              <p><small><span><strong>Description:</strong></span> <br /> {chefInfo.description}</small></p>
              <p><span><strong>Experience:</strong></span> {chefInfo.yearsExperience}years </p>
              <p><span><strong>Numbers of recipes:</strong></span> {chefInfo.number} items</p>
              <p className='text-primary fs-5 fw-bold'> Likes: <FaThumbsUp style={{marginBottom:'5px'}} /> {chefInfo.likes}</p> 
              <div>
                <h4>Chef's recipes </h4>
              <Row>
        <Col>
        <Card variant="light" bg='light' style={{ width: '18rem' ,height:'12rem' }}>
      <Card.Body>
        <Card.Title>Recipe name: {chefInfo.recipes[0].name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ingridents:{chefInfo.recipes[0].ingredients}</Card.Subtitle>
        <Card.Text className='mb-0'>
        Cooking Method: {chefInfo.recipes[0].cookingMethod}
        </Card.Text>
        <Rating
            placeholderRating={chefInfo.recipes[2].rating}
            readonly
            emptySymbol={<FaRegStar/>}
            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
            fullSymbol={<FaStar></FaStar>}
        >
    
        </Rating>
        <br />
        <Button onClick={handleClick}  variant="info">Favorite</Button>
      </Card.Body>
    </Card>
        </Col>
     
        <Col>
        <Card variant="light" bg='light' style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title>Recipe name: {chefInfo.recipes[1].name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ingridents: {chefInfo.recipes[0].ingredients}</Card.Subtitle>
        <Card.Text style={{marginBottom:'0'}}>
        Cooking Method: {chefInfo.recipes[1].cookingMethod}
        </Card.Text>
        <Rating
            placeholderRating={chefInfo.recipes[2].rating}
            readonly
            emptySymbol={<FaRegStar/>}
            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
            fullSymbol={<FaStar></FaStar>}
        >
    
        </Rating> <br />
        <Button onClick={handleClick}  variant="info">Favorite</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card variant="light" bg='light' style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title>Recipe name: {chefInfo.recipes[2].name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ingridents: {chefInfo.recipes[0].ingredients}</Card.Subtitle>
        <Card.Text  style={{marginBottom:'0'}}>
        Cooking Method: {chefInfo.recipes[2].cookingMethod}
        </Card.Text>
        <Rating
            placeholderRating={chefInfo.recipes[2].rating}
            readonly
            emptySymbol={<FaRegStar/>}
            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
            fullSymbol={<FaStar></FaStar>}
        >
    
        </Rating> <br />
        <Button id='btn' onClick={handleClick} variant="info">Favorite</Button>
      <nav><ActiveLink>hello</ActiveLink></nav>
      </Card.Body>
    </Card>
        </Col>
     
        
      </Row>
          
              </div>
            </div>
           </div>
           <ToastContainer></ToastContainer>
        </Container>
        
    );
};

export default Recipes;