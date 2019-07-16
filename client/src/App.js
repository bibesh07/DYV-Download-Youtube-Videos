import React from 'react';
import './App.css';
import {Home} from './home/home'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {VideoDescription} from './videoDescription/videoDescription';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/test' component={VideoDescription} />
      </Router>
    </div>
  );
}

export default App;
