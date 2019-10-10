/**
 * Searchbar.test.tsx
 *
 * @description Searchbar component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

import Searchbar from './Searchbar';

Enzyme.configure({ adapter: new Adapter() });

const noop = () => { };

describe('Searchbar', () => {
  it('should render without crashing', () => {
    shallow(<Searchbar onSearch={noop} />);
    expect(true).toBe(true);
  });

  it('should take an onSearch callback', () => {
    const cb = jest.fn();
    const wrapper = mount(<Searchbar onSearch={cb} />);
    wrapper.find('svg').simulate('click');
    expect(cb.mock.calls.length).toBe(1);
  });

  it('should take an optional onChange callback', () => {
    const cb = jest.fn();
    const wrapper = mount(<Searchbar onSearch={noop} onChange={cb} />);
    wrapper.find('input').simulate('change', { target: { value: 'abc' } });
    expect(cb.mock.calls.length).toBe(1);
  });
});
