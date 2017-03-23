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
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    }

    componentDidMount() {
        const cars = this.getCars();
        
        // timeout is to simulate API call
        setTimeout(() => {
            const newState = update(this.state, {
                cars: { $set: cars.cars },
                pagination: {
                    total: { $set: cars.total }
                }
            });

            this.setState(newState);
        }, 500);
    }

    getCars(filterText) {
        const beg = this.getStartingIndex(this.state.pagination);
        const end = this.getEndingIndex(this.state.pagination);

        filterText = filterText && filterText.length ? filterText.toLowerCase() : '';

        let result = {};

        const filteredCars = CARS
            .filter(car => {
                    return (car.make.toLowerCase().indexOf(filterText) > -1  ||
                        car.model.toLowerCase().indexOf(filterText) > -1) &&
                        car.make.indexOf(this.state.make) > -1
            });

        result.total = filteredCars.length;

        result.cars = filteredCars
            .slice(beg, end)
            .sort((a, b) => a.make > b.make)

        return result;
    }

    getStartingIndex(pagination) {
        return (pagination.page - 1) * pagination.limit;
    }

    getEndingIndex(pagination) {
        return pagination.page * pagination.limit;
    }

    handleFilterTextInput(filterText) {
        const cars = this.getCars(filterText);

        const newState = update(this.state, {
            filterText: { $set: filterText },
            cars: { $set: cars.cars },
            pagination: {
                total: { $set: cars.total }
            }
        });
        
        this.setState(newState);
    }

    handleSelect(make) {
        const newState = update(this.state, {
            make: { $set: make }
        });
        
        this.setState(newState);
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

    handleNextButtonClick() {
        const newState = update(this.state, {
            pagination: {
                page: { $set: this.state.pagination.page + 1 }
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
                    pagination={this.state.pagination}
                />
                <PaginationBar 
                    pagination={this.state.pagination}
                    onLimitSelect={this.handleLimitSelect}
                    onPreviousButtonClick={this.handlePreviousButtonClick}
                    onNextButtonClick={this.handleNextButtonClick}
                />
            </div>
        );
    }
}

export default FilterableCarTable;
