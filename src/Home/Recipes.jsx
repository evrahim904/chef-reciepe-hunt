import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const Recipes = () => {
    const chefInfo = useLoaderData()
    console.log(chefInfo)
    return (
        <Container>
            <section>
            <h3> Lets go for a?</h3>
            </section>
        </Container>
    );
};

export default Recipes;