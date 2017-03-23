import React, { Component } from 'react';

import { Row, Col, Table } from 'react-bootstrap';

import CarRow from '../CarRow/CarRow';

class CarTable extends Component {
    render() {
        const filterText = this.props.filterText.toLowerCase();
        
        const rows = this.props.cars
                                .filter(car => {
                                     return (car.make.toLowerCase().indexOf(filterText) > -1  ||
                                            car.model.toLowerCase().indexOf(filterText) > -1) &&
                                            car.make.indexOf(this.props.make) > -1
                                })
                                .map(car => <CarRow car={car} key={car.car_id} />);               

        return (
            <Row>
                <Col sm={12}>
                    <Table responsive bordered hover>
                        <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Displacement</th>
                                <th>Cylinders</th>
                                <th>Combined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.length > 0 ? (
                                rows
                            ) : (
                                <tr><td colSpan="5">No matching results</td></tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}

export default CarTable;
