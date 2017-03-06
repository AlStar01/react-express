import React, { Component } from 'react';
import './App.css';

import { Grid, Navbar } from 'react-bootstrap';

import FilterableCarTable from './components/table/FilterableCarTable/FilterableCarTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fixedTop>
          <Navbar.Brand>
            <a href="#">React Sample</a>
          </Navbar.Brand>
        </Navbar>

        <main className="App-Content">
          <Grid>
              <FilterableCarTable />
          </Grid>
        </main>
       </div>
    );
  }
}

export default App;
