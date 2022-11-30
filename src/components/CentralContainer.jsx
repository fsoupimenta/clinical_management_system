import React from 'react';
import Button from './Button';

import "./css/CentralContainer.css"
import SearchBar from './SearchBar'

const CentralContainer= ({button_title}) => {
    return (  
        <div className='central-container'>
            <div className='header-central-container'>
                <SearchBar />
                <Button className='add-patient-button' title={button_title} />
            </div>
        </div>
    )
};
 
export default CentralContainer;