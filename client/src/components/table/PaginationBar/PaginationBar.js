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
        this.props.onLimitSelect(e.target.value);
    }

    handlePreviousButtonClick() {
        console.log("Previous button clicked");
    }

    handleNextButtonClick() {
        console.log("Next button clicks");
    }

    render() {
        const pagination = this.props.pagination;

        const prevDisabled = (pagination.page === 1);
        const nextDisabled = false;
        
        return (
            <Row>
                <Col sm={12}>
                    <div className="pull-left pagination__label">
                        <div style={{ paddingTop: 7 }}>Showing result 1 - 10 of {pagination.total}</div>
                    </div>
                    <div className="pull-right">
                        <Form inline>
                            <FormGroup controlId="limit">
                                <ControlLabel>Per page</ControlLabel>
                                {' '}
                                <FormControl
                                    componentClass="select" 
                                    placeholder="Per page"
                                    value={this.props.pagination.limit}
                                    onChange={this.handleLimitSelect}>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                </FormControl>
                            </FormGroup>
                            {' '}
                            <Button id="previous" onClick={this.handlePreviousButtonClick} disabled={prevDisabled}>
                                <Glyphicon glyph="chevron-left"></Glyphicon>
                            </Button>
                            {' '}
                            <Button id="next" onClick={this.handleNextButtonClick} disabled={nextDisabled}>
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
