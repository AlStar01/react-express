import React, { Component } from 'react';

import { Button, Row, Col, Form, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';

class FilterBar extends Component {
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
            <Row>
                <Col sm={12}>
                    <Form inline>
                        <FormGroup controlId="filterSearch">
                            <ControlLabel>Search</ControlLabel>
                            {' '}
                            <FormControl
                                type="text"
                                onChange={this.handleFilterTextInputChange}
                                placeholder="Search..."
                                value={this.props.filterText}
                            />
                        </FormGroup>

                        {' '}

                        <FormGroup controlId="filterSelect">
                            <ControlLabel>Make</ControlLabel>
                            {' '}
                            <FormControl 
                                componentClass="select" 
                                placeholder="Select make..." 
                                value={this.props.make} 
                                onChange={this.handleSelectChange}>
                                    <option value="">Select make...</option>
                                    {options}
                            </FormControl>
                        </FormGroup>

                        {' '}

                        <Button onClick={this.handleResetClick}>Reset</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default FilterBar;
