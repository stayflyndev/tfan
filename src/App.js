import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';

const Food = () => {
  return (
    <div>
      <p> foooood page</p>
    </div>
  )};


function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/food' component={Food} />
      </Switch >
    </div>
  );
}

export default App;
