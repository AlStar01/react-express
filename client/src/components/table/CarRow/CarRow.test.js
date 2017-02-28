import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CarRow from './CarRow';

const car = {
    car_id: 1,
    make: 'foo',
    model: 'bar',
    displacement: 1.5,
    cylinders: 6,
    city_fuel_economy: 14,
    highway_fuel_economy: 18,
    combined_fuel_economy: 16
};

describe('CarRow', () => {
    it('should render without throwing an error', () => {
        shallow(<CarRow car={car} />);
    });

    it('should contain a single <tr> element', () => {
        expect(render(<CarRow car={car} />).find('tr').length).toEqual(1);
    });

    it('should contain <td> elements for each property', () => {
        expect(render(<CarRow car={car} />).find('td').length).toEqual(7);
    });

    it('should render to static HTML', () => {
        expect(render(<CarRow car={car} />).text()).toContain('foo');
    });
});
