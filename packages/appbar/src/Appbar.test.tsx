/**
 * Appbar.test.tsx
 *
 * @description Appbar component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';

import Appbar from './Appbar';

Enzyme.configure({ adapter: new Adapter() });

describe('basic Appbar', () => {
  it('should render without crashing', () => {
    mount(<MemoryRouter><Appbar title="" /></MemoryRouter>);
    expect(true).toBe(true);
  });

  it('should have a required title prop that renders in an h6', () => {
    const wrapper = mount(<MemoryRouter><Appbar title="foobar" /></MemoryRouter>);
    expect(wrapper.find('h6').text().trim()).toBe('foobar');
  });

  // it('should take a prop that renders a searchbar', () => {
  //   const wrapper = mount(<MemoryRouter><Appbar title="foobar" /></MemoryRouter>);
  //   expect(wrapper.find('input').length).toBe(0);
  //   const wrapper2 = mount(
  //     <MemoryRouter>
  //       <Appbar title="foobar" Searchbar={<input />} />
  //     </MemoryRouter>,
  //   );
  //   expect(wrapper2.find('input').length).toBe(1);
  // });
});
