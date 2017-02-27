import React, { Component } from 'react';

import CarRow from '../CarRow/CarRow';

class CarTable extends Component {
    render() {
        const filterText = this.props.filterText.toLowerCase();
        
        const rows = this.props.cars
                                .filter(car => car.make.toLowerCase().indexOf(filterText) > -1)
                                .map(car => <CarRow car={car} key={car.car_id} />);
        
        if(rows.length > 0) {
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
        else {
            return <div>No matching results</div>
        }
    }
}

export default CarTable;
