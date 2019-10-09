/**
 * TMCMap.test.tsx
 *
 * @description TMC leaflet component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';

import { TMCMap, TMCPoly } from './TMCMap';

Enzyme.configure({ adapter: new Adapter() });

describe('TMCMap', () => {
  it('should render without crashing', () => {
    mount(<TMCMap />);
    expect(true).toBe(true);
  });
});

describe('TMCPoly', () => {
  it('should render without crashing', () => {
    mount(<TMCMap><TMCPoly path={[[24, 21], [13, 23]]} /></TMCMap>);
    expect(true).toBe(true);
  });
});
