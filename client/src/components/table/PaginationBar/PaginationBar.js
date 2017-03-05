import React, { Component } from 'react';

import { 
    Row, Col, Button, 
    Glyphicon, Form, FormGroup, 
    FormControl, ControlLabel } from 'react-bootstrap';

class PaginationBar extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <div className="pull-left">
                        <div style={{ paddingTop: 7 }}>Showing result 1 of 100</div>
                    </div>
                    <div className="pull-right">
                        <Form inline>
                            <FormGroup controlId="limit">
                                <ControlLabel>Per page</ControlLabel>
                                {' '}
                                <FormControl
                                    componentClass="select" 
                                    placeholder="Per page">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                </FormControl>
                            </FormGroup>
                            {' '}
                            <Button><Glyphicon glyph="chevron-left"></Glyphicon></Button>
                            {' '}
                            <Button><Glyphicon glyph="chevron-right"></Glyphicon></Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default PaginationBar;
