import React from 'react';
import './Active.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink style={{textDecoration: 'none'}}
        to={to}
        className={({ isActive}) =>isActive? "active": ""}
      >
        {children}
      </NavLink>
    );
};

export default ActiveLink;