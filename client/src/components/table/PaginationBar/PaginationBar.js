import React, { Component } from 'react';

import { 
    Row, Col, Button, 
    Glyphicon, Form, FormGroup, 
    FormControl, ControlLabel } from 'react-bootstrap';

class PaginationBar extends Component {
    constructor(props) {
        super(props);

        this.handleLimitSelect = this.handleLimitSelect.bind(this);
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    }

    handleLimitSelect(e) {
        console.log(e.target.value);
    }

    handlePreviousButtonClick() {
        console.log("Previous button clicked");
    }

    handleNextButtonClick() {
        console.log("Next button clicks");
    }

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
                                    placeholder="Per page"
                                    onChange={this.handleLimitSelect}>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                </FormControl>
                            </FormGroup>
                            {' '}
                            <Button onClick={this.handlePreviousButtonClick}>
                                <Glyphicon glyph="chevron-left"></Glyphicon>
                            </Button>
                            {' '}
                            <Button onClick={this.handleNextButtonClick}>
                                <Glyphicon glyph="chevron-right"></Glyphicon>
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default PaginationBar;