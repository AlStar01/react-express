import React, { Component } from 'react';

import FilterBar from '../../search/FilterBar/FilterBar';

import CarTable from '../CarTable/CarTable';

import PaginationBar from '../PaginationBar/PaginationBar';

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
                <FilterBar 
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
                <PaginationBar />
            </div>
        );
    }
}

export default FilterableCarTable;
