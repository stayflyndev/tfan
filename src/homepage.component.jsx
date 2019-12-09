import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './hp.styles.scss';

const HomePage = () => {
    return (

        <div className='container'>
           <div className="food-menu">
             
          <div className="food-item">
          <div className="food-content"><h1 className="title">Italian</h1><span>Price $</span>
           </div>
           </div>
           
          <div className="food-item">
          <div className="food-content"><h1 className="title">Jamaican</h1><span>Price $</span>
           </div>
           </div>
           
          <div className="food-item">
          <div className="food-content"><h1 className="title">Mexican</h1><span>Price $</span>
           </div>
           </div>
          
          <div className="food-item">
          <div className="food-content"><h1 className="title">BBQ</h1><span>Price $</span>
           </div>
           </div>
           
          <div className="food-item"><div className="food-content"><h1>Chinese</h1><span>Price $</span>
           </div>
           </div>
        </div>
        </div>
        


    );
}

export default HomePage;
