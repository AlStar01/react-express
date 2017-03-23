import React, { Component } from 'react';

import update from 'immutability-helper';

import FilterBar from '../../search/FilterBar/FilterBar';

import CarTable from '../CarTable/CarTable';

import PaginationBar from '../PaginationBar/PaginationBar';

import CARS from '../cars';

class FilterableCarTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            make: '',
            cars: [],
            pagination: {
                page: 1,
                limit: 10,
                total: 0
            }
        };

        this.componentDidMount = this.componentDidMount.bind(this);

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.handleLimitSelect = this.handleLimitSelect.bind(this);
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this); 
    }

    componentDidMount() {
        // timeout is to simulate API call
        setTimeout(() => {
            this.setState({
                cars: CARS,
                pagination: {
                    page: 2,
                    limit: 10,
                    total: CARS.length
                }
            });
        }, 1000);
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

    handleLimitSelect(limit) {
        const newState = update(this.state, {
            pagination: {
                limit: { $set: limit }
            }
        });

        this.setState(newState);
    }

    handlePreviousButtonClick() {
        const newState = update(this.state, {
            pagination: {
                page: { $set: this.state.pagination.page - 1}
            }
        });

        this.setState(newState);
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
                    cars={this.state.cars}
                />
                <br />
                <CarTable 
                    cars={this.state.cars}
                    make={this.state.make}
                    filterText={this.state.filterText}
                />
                <PaginationBar 
                    pagination={this.state.pagination}
                    onLimitSelect={this.handleLimitSelect}
                    onPreviousButtonClick={this.handlePreviousButtonClick}    
                />
            </div>
        );
    }
}

export default FilterableCarTable;
