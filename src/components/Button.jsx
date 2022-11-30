import React from 'react';

import "./css/Button.css";

const Button = ({title}) => {
    return (
        <button className='button'>
            Add {title}
        </button>
      );
}
export default Button;