import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './hp.styles.scss';
import Directory from '../../components/directory/food-directory.component';

const HomePage = () => {
    return (

        <div className='container'>
           <Directory />
        </div>



    );
}

export default HomePage;
