import React, { Component } from 'react';

import SearchBar from '../../search/SearchBar/SearchBar';

import CarTable from '../CarTable/CarTable';

class FilterableCarTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: ''
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div>
                <SearchBar 
                    filterText={this.state.filterText}
                    onFilterTextInput={this.handleFilterTextInput}
                />
                <br />
                <CarTable 
                    cars={this.props.cars}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}

export default FilterableCarTable;
