import React, { Component } from 'react';

import { Button, Textfield } from 'react-mdl';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleSelectChange(e) {
        this.props.onSelect(e.target.value);
    }

    handleResetClick(e) {
        e.preventDefault();
        this.props.onReset();
    }
    
    render() {
        const filterText = this.props.filterText.toLowerCase();
        
        const filteredCars = this.props.cars.filter(car => {
            return car.make.toLowerCase().indexOf(filterText) > -1  ||
                   car.model.toLowerCase().indexOf(filterText) > -1;
        });
        
        const options = [...new Set(filteredCars.map(car => car.make))]
            .sort((a, b) => a > b)
            .map(make => <option value={make} key={make}>{make}</option>);
        
        return (
            <form>
                <Textfield
                    onChange={this.handleFilterTextInputChange}
                    label="Search..."
                    value={this.props.filterText}
                    style={{width: '200px'}}
                    floatingLabel
                />

                <select value={this.props.make} onChange={this.handleSelectChange}>
                        <option value="">Select make...</option>
                        {options}
                </select>

                <Button raised ripple onClick={this.handleResetClick}>Reset</Button>
            </form>
        );
    }
}

export default SearchBar;
