import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import './Home.css'
const Home = () => {
    const [formation,setInformation] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/data')
        .then(res =>res.json())
        .then(data => setInformation(data))
        .catch(error => console.error(error))
    },[])
    return (
        <section className='container'>
            
            <h4 className='text-center'>French Chefs Info</h4>
            
 <div className='row'>
 <div className='grid-container'>
    
    {
                 formation.map(info =><Chef 
                 key={info.id}
                 info = {info}
                 ></Chef>)
             }
    </div>
 </div>
 </section>
    );
};

export default Home;