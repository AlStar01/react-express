import React, { Component } from 'react';

class CarRow extends Component {
    render() {
        var car = this.props.car;
        
        return (
            <tr>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.displacement}</td>
                <td>{car.cylinders}</td>
                <td>{car.city_fuel_economy}</td>
                <td>{car.highway_fuel_economy}</td>
                <td>{car.combined_fuel_economy}</td>
            </tr>
        );
    }
}

CarRow.propTypes = {
    car: React.PropTypes.object.isRequired
}

export default CarRow;
