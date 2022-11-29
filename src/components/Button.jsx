import React from 'react';

import "./css/Button.css";

const Button = ({//children,
     onClick}) => {
    return (
        
        <button className='button' onClick={onClick}>
            Adicionar
        </button>



      );
}
export default Button;