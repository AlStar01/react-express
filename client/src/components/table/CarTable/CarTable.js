import React, { Component } from 'react';

import CarRow from '../CarRow/CarRow';

import CARS from '../cars';

class CarTable extends Component {
    render() {
        const rows = CARS.map(car => <CarRow car={car} key={car.car_id} />);
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Displacement</th>
                        <th>Cylinders</th>
                        <th>City</th>
                        <th>Highway</th>
                        <th>Combined</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default CarTable;
