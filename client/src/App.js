import React, { Component } from 'react';
import './App.css';

import { Grid } from 'react-bootstrap';

import CARS from './components/table/cars';

import FilterableCarTable from './components/table/FilterableCarTable/FilterableCarTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-Content">
          <Grid>
              <FilterableCarTable cars={CARS} />
          </Grid>
        </main>
       </div>
    );
  }
}

export default App;
