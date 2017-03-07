import React from 'react';
import { shallow } from 'enzyme';

import { Button } from 'react-bootstrap';

import PaginationBar from './PaginationBar';

let pagination = {
    page: 1,
    limit: 10,
    total: 1000
};

describe('Pagination Bar', () => {
    it('should render without throwing an error', () => {
        shallow(<PaginationBar pagination={pagination} />);
    });

    it('should display total results', () => {
        const wrapper = shallow(<PaginationBar pagination={pagination} />);
        expect(wrapper.find('.pagination__label')).toIncludeText(pagination.total);
    });

    it('should disable previous button on first page', () => {
        const wrapper = shallow(<PaginationBar pagination={pagination} />);
        expect(wrapper.find(Button).at(0)).toBeDisabled();
    });

    it('should enable previous button past first page', () => {
        const wrapper = shallow(<PaginationBar pagination={pagination} />);
        wrapper.setProps({ pagination: {
            page: 2
        }});
        expect(wrapper.find(Button).at(0)).not.toBeDisabled();
    });
});
