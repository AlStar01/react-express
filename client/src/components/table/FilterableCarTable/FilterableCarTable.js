import React, { Component } from 'react';

import SearchBar from '../../search/SearchBar/SearchBar';

import CarTable from '../CarTable/CarTable';

class FilterableCarTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: ''
        };
    }
    
    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} />
                <br />
                <CarTable cars={this.props.cars} />
            </div>
        );
    }
}

export default FilterableCarTable;
