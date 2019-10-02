/**
 * Account.test.js
 *
 * @description Account component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import MenuItem from '@material-ui/core/MenuItem';
import {
  MemoryRouter,
  Route,
} from 'react-router-dom';

import Account from './Account';

Enzyme.configure({ adapter: new Adapter() });

const noop = () => { };

describe('Account', () => {
  it('should render without crashing', () => {
    shallow(<Account logoff={noop} />);
    expect(true).toBe(true);
  });

  it('should take a logoff callback', () => {
    const cb = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <Route path="/">
          <Account logoff={cb} />
        </Route>
        <Route path="/login">
          <p>Hi</p>
        </Route>
      </MemoryRouter>,
    );
    wrapper.find('svg').simulate('click');
    wrapper.find(MenuItem).at(1).simulate('click');
    expect(cb.mock.calls.length).toBe(1);
  });
});
