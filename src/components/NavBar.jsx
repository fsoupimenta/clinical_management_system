import React from 'react';
import "./css/NavBar.css"

const NavBar = ({title}) => {
    return ( 
        <div className='nav-bar-container'>
            <h2 className="page-title">{title}</h2>
        </div>
    )
};
 
export default NavBar;