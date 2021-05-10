import React from 'react';
import '../../../App.css';


function TabletMobile({ name, clickHandler}) {
    return (
        <li
            className="navigatie-mobile-category"
            onClick={clickHandler}
        >
            {name}
        </li>
    );
}
export default TabletMobile;