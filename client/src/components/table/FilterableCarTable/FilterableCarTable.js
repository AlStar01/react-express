import React, { Component } from 'react';

import SearchBar from '../../search/SearchBar/SearchBar';

import CarTable from '../CarTable/CarTable';

class FilterableCarTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            make: ''
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleSelect(make) {
        this.setState({
            make: make
        });
    }

    handleReset() {
        this.setState({
            filterText: '',
            make: ''
        });
    }

    render() {
        return (
            <div>
                <SearchBar 
                    filterText={this.state.filterText}
                    make={this.state.make}
                    onFilterTextInput={this.handleFilterTextInput}
                    onSelect={this.handleSelect}
                    onReset={this.handleReset}
                    cars={this.props.cars}
                />
                <br />
                <CarTable 
                    cars={this.props.cars}
                    make={this.state.make}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}

export default FilterableCarTable;
