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

        this.getStartingValue = this.getStartingValue.bind(this);
        this.getEndingValue = this.getEndingValue.bind(this);
    }

    handleLimitSelect(e) {
        this.props.onLimitSelect(e.target.value);
    }

    handlePreviousButtonClick() {
        if(this.props.pagination.page > 1) {
            this.props.onPreviousButtonClick();
        }
    }

    handleNextButtonClick() {
        this.props.onNextButtonClick();
    }

    getStartingValue() {
        const pagination = this.props.pagination;
        const value = (pagination.page * pagination.limit + 1) - pagination.limit;
        return pagination.total > 0 ? value : 0;
    }

    getEndingValue() {
        return Math.min(this.props.pagination.page * this.props.pagination.limit, this.props.pagination.total);
    }

    render() {
        const pagination = this.props.pagination;

        const startingValue = this.getStartingValue();
        const endingValue = this.getEndingValue();
        
        const prevDisabled = (pagination.page === 1);
        const nextDisabled = pagination.total <= endingValue;
        
        return (
            <Row>
                <Col sm={12}>
                    <div className="pull-left pagination__label">
                        <div style={{ paddingTop: 7 }}>
                            Showing result {startingValue} - {endingValue} of {pagination.total}
                        </div>
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
