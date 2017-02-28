import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CARS from './components/table/cars';

import FilterableCarTable from './components/table/FilterableCarTable/FilterableCarTable';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
         </div>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
 
         <div className="App-content">
           <FilterableCarTable cars={CARS} />
         </div>
       </div>
    );
  }
}

export default App;
