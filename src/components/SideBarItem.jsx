import React from 'react';
import "./css/SideBarItem.css"

const SideBarItem = ({item}) => {
    return ( 
            <button className='side-bar-button'>{item}</button>
    )
};
 
export default SideBarItem;