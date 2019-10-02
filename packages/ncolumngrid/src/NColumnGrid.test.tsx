/**
 * ctx.test.tsx
 *
 * @description Tests for the context hook and provider.
 *
 * @author jasmith79@gmail.com
 * @license MIT
 */

import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NColumnGrid from './NColumnGrid';

describe('NColumnGrid', () => {
  it('should render without crashing', () => {
    shallow(<NColumnGrid items={[]} />);
    expect(true).toBe(true);
  });

  it('should render the passed-in items', () => {
    const arr = [
      <button>foo</button>,
      <p>bar</p>,
      <aside>baz</aside>
    ];

    const wrapper = mount(<NColumnGrid items={arr} />);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('aside').length).toBe(1);
  });

  it('should take a columns prop with a value of 1, 2, or 3', () => {
    shallow(<NColumnGrid items={[]} columns={1} />);
    shallow(<NColumnGrid items={[]} columns={2} />);
    shallow(<NColumnGrid items={[]} columns={3} />);
    expect(true).toBe(true)
  });
});