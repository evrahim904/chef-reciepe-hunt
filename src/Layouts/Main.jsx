import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <Home></Home>
        </div>
    );
};

export default Main;