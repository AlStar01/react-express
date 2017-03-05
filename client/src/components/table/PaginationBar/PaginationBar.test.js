import React from 'react';
import { shallow } from 'enzyme';

import PaginationBar from './PaginationBar';

describe('Pagination Bar', () => {
    it('should render without throwing an error', () => {
        shallow(<PaginationBar />);
    });
});