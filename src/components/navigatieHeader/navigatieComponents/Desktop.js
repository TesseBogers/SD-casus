import React from 'react';
import '../../../App.css';


function Desktop({clickHandler,name, logo}) {
    return (
        <li
            className="navigatie-category"
            onClick={clickHandler}
        >
            <img className="category-logo" src={logo} alt={name}/>
            {name}
        </li>
    );
}
export default Desktop;