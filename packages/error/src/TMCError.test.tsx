/**
 * TMCError.test.tsx
 *
 * @description TMCError component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

import TMCError from './TMCError';

Enzyme.configure({ adapter: new Adapter() });

describe('TMCError', () => {
  it('should render without crashing', () => {
    shallow(<TMCError />);
    expect(true).toBe(true);
  });

  it('should render a default error message', () => {
    const wrapper = mount(<TMCError />);
    expect(wrapper.text().match('An error has occured please reload.')).not.toBeNull();
  });

  it('should render a passed-in message', () => {
    const wrapper = mount(
      <TMCError message="foobar!" />,
    );
    console.log(wrapper.text());
    expect(wrapper.text().match('foobar!')).not.toBeNull();
  });
});
