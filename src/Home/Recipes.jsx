import React from 'react';
import { Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';


const Recipes = () => {
    const chefInfo = useLoaderData()
    console.log(chefInfo)
    return (
        
        <Container>
            {/* <section style={{marginTop:'170px'}} className='d-flex justify-content-between gap-2 '>
            <div style={{width:'450px',height:'400px'}} className='bg-info rounded'>
              <h2>Name: {chefInfo.name}</h2>
              <p><small>Description: {chefInfo.description}</small></p>
              <p>Experience: {chefInfo.yearsExperience}years </p>
              <p>Numbers of recipes: {chefInfo.number} items</p>
              <p className='text-primary fs-5 fw-bold'> Likes: <FaThumbsUp style={{marginBottom:'5px'}} /> {chefInfo.likes}</p>
            </div>
            <div>
            <Image className='rounded' style={{width:'700px',}} src={chefInfo.image} fluid />
            </div>
            </section> */}
        <div class="jumbotron">
            <div  className='rounded d-flex justify-content-center'>

        <Card.Img className='rounded' style={{width:'700px',}} src={chefInfo.image} />
            </div>
  <hr className="my-4" />
  <div  className='bg-info rounded px-2 py-2 text-center '>
              <h2><span><strong>Name:</strong></span> {chefInfo.name}</h2>
              <p><small><span><strong>Description:</strong></span> <br /> {chefInfo.description}</small></p>
              <p><span><strong>Experience:</strong></span> {chefInfo.yearsExperience}years </p>
              <p><span><strong>Numbers of recipes:</strong></span> {chefInfo.number} items</p>
              <p className='text-primary fs-5 fw-bold'> Likes: <FaThumbsUp style={{marginBottom:'5px'}} /> {chefInfo.likes}</p> 
              <div>
                <h4>Chef's recipes</h4>
              <Row>
        <Col>
        <Card variant="light" bg='light' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Recipe name: {chefInfo.recipes[0].name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ingrident: {chefInfo.recipes[0].ingredients }</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
          
              </div>
            </div>

</div>
        </Container>
    );
};

export default Recipes;