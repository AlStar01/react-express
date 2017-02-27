import React, { Component } from 'react';

import SearchBar from '../../search/SearchBar/SearchBar';

import CarTable from '../CarTable/CarTable';

class FilterableCarTable extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <br />
                <CarTable cars={this.props.cars} />
            </div>
        );
    }
}

export default FilterableCarTable;
