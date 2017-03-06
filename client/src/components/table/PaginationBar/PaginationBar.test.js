import React from 'react';
import { shallow } from 'enzyme';

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
});