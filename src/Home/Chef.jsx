import React from 'react';
import { Button, Card, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';

const Chef = ({info}) => {
    
   const {name,image,yearsExperience,likes,number} = info;

    return (
        <div>
            <Container > 
            <Card  className='rounded-lg '
              style={{ width: '100%',height:'420px' ,position:'relative'}}>
      <Card.Img style={{width:'100%'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <>Experience: {yearsExperience}years</>
        </Card.Text>
        <Card.Text>
          <>Numbers of recipes: {number} items</>
        </Card.Text>
        <Card.Text>
        <> <span className='text-primary fs-5 fw-bold'> Likes: <FaThumbsUp style={{marginBottom:'5px'}} /> {likes}</span></>
        </Card.Text>
        <Link to={`/info/${info.id}`}><Button style={{position:'absolute', bottom:'0'}} variant="primary">View Recipes</Button></Link>
      </Card.Body>
    </Card>

            </Container>
        </div>
    );
};

export default Chef;