import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/package.svg';
import './header.styles.scss'
const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to ='/'>
            <Logo className="logo" to='/' title="tfan" /> 
            </Link>
            <div className='options'>
                <Link className="option">
                    Buy Food
                </Link>
            </div>
            
        </div>
    );
}

export default Header;
