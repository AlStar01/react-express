import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import CARS from './components/table/cars';

import FilterableCarTable from './components/table/FilterableCarTable/FilterableCarTable';

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header title={<span>React</span>}>
            <Navigation>
              <a href="">Link</a>
            </Navigation>
          </Header>
          <Drawer title="Navigation">
              <Navigation>
                <a href="">Link</a>
              </Navigation>
          </Drawer>
          <Content>
            <div className="App-content">
              <FilterableCarTable cars={CARS} />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
