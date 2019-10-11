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

import Appbar, { TMCUserAppbar } from './Appbar';

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

  it('should take a prop that renders a searchbar', () => {
    const wrapper = mount(<MemoryRouter><Appbar title="foobar" /></MemoryRouter>);
    expect(wrapper.find('input').length).toBe(0);
    const wrapper2 = mount(
      <MemoryRouter>
        <Appbar title="foobar" Searchbar={<input />} />
      </MemoryRouter>,
    );
    expect(wrapper2.find('input').length).toBe(1);
  });
});

describe('user Appbar', () => {
  it('should render without crashing', () => {
    mount(<MemoryRouter><TMCUserAppbar title="" /></MemoryRouter>);
    expect(true).toBe(true);
  });

  it('should have a required title prop that renders in an h6', () => {
    const wrapper = mount(<MemoryRouter><TMCUserAppbar title="foobar" /></MemoryRouter>);
    expect(wrapper.find('h6').text().trim()).toBe('foobar');
  });

  it('should take a prop that renders a searchbar', () => {
    const wrapper = mount(<MemoryRouter><TMCUserAppbar title="foobar" /></MemoryRouter>);
    expect(wrapper.find('input').length).toBe(0);
    const wrapper2 = mount(
      <MemoryRouter>
        <TMCUserAppbar title="foobar" Searchbar={<input />} />
      </MemoryRouter>,
    );
    expect(wrapper2.find('input').length).toBe(1);
  });

  it('should take a logoff prop.', () => {
    const logoff = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <TMCUserAppbar
          title="foobar"
          logoff={logoff}
        />
      </MemoryRouter>
    );

    expect(wrapper.find(TMCUserAppbar).props().logoff).toBe(logoff);
  });

  it('should take a user prop.', () => {
    const user = { userName: 'foobar', xyz: 123 };
    const wrapper = mount(
      <MemoryRouter>
        <TMCUserAppbar
          title="foobar"
          user={user}
        />
      </MemoryRouter>
    );

    expect(wrapper.find(TMCUserAppbar).props().user).toBe(user);
  });


  it('should take an Account prop and render it', () => {
    const wrapper = mount(
      <MemoryRouter>
        <TMCUserAppbar title="foobar" Account={<input />} />
      </MemoryRouter>,
    );
    expect(wrapper.find('input').length).toBe(1);
  });
});
