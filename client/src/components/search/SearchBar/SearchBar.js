import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleSelectChange(e) {
        this.props.onSelect(e.target.value);
    }
    
    render() {
        const options = [...new Set(this.props.cars.map(car => car.make))]
            .sort((a, b) => a > b)
            .map(make => <option value={make} key={make}>{make}</option>);
        
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />

                <select value={this.props.make} onChange={this.handleSelectChange}>
                        <option value="">Select make...</option>
                        {options}
                </select>
            </form>
        );
    }
}

export default SearchBar;
