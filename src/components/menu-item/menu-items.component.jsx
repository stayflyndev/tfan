import React from 'react';
import './menu-items.styles.scss'

const MenuItem = ({ title, url }) => (

    <div style={{
        backgroundImage: `url(${url})`
    }}
        className="food-item">
        <div className="food-content">
            <h1 className="title">{title}</h1>
            <span>Price $</span>
        </div>
    </div>
);

export default MenuItem;
