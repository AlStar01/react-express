import React, { Component } from 'react';
import './CarRow.css';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class CarRow extends Component {
    render() {
        var car = this.props.car;

        const tooltip = <Tooltip id="tooltip">City: {car.city_fuel_economy}, Highway: {car.highway_fuel_economy}</Tooltip>;
        
        return (
            <tr className="carRow">
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.displacement}</td>
                <td>{car.cylinders}</td>
                <td>
                    <OverlayTrigger overlay={tooltip}>
                        <u className="text-info">{car.combined_fuel_economy}</u>
                    </OverlayTrigger>
                </td>
            </tr>
        );
    }
}

CarRow.propTypes = {
    car: React.PropTypes.object.isRequired
}

export default CarRow;
