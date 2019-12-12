import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-items.styles.scss'

const MenuItem = ({ title, url, history, link, match }) => (
<div className='food-item' onClick={() =>history.push(`${match.url}${link}`)} >
    <div className='background-image' style={{
        backgroundImage: `url(${url})`
    }}>
        <div className="food-content">
            <h1 className="title">{title}</h1>
            <span>Price $</span>
        </div>
    </div></div>
);

export default withRouter(MenuItem);
// give access to history props from Route