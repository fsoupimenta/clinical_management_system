import React from 'react';

import "./css/CentralContainer.css"
import Registration from './Registration'

const CentralContainer= ({button_title}) => {
    return (  
        <div className='central-container'>
            <div className='header-central-container'>
                <Registration />
            </div>
        </div>
    )
};
 
export default CentralContainer;