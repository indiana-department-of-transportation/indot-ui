/**
 * Login.test.tsx
 *
 * @description Login component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import globalThis from '@jasmith79/global-this';

import '../utils/fake-backend';

import Login from './Login';

globalThis.window = globalThis;
Enzyme.configure({ adapter: new Adapter() });

describe('Login', () => {
  it('should render without crashing', () => {
    mount(<Login
      login={(x: string, y: string) => {}}
    />);
    expect(true).toBe(true);
  });

  xit('should take an update fn and initial state', (done) => {
    const updateFn = jest.fn();
    const fetch = jest.fn();
    globalThis.fetch = fetch;
    const wrapper = mount(<Login
      login={updateFn}
    />);

    wrapper.find('button').simulate('click');
    setTimeout(() => {
      expect(updateFn).toHaveBeenCalledWith({
        token: 'FOOBAR',
        roles: ['technician'],
        user_id: 1,
        user_name: 'bob',
        user_pass: 'foo',
      });
      expect(fetch).toHaveBeenCalledWith(`${globalThis.location.origin}/${process.env.REACT_APP_BACKEND_URL}/auth`);
      done();
    }, 500);
  });
});
