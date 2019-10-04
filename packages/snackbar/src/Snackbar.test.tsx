/**
 * Snackbar.test.tsx
 *
 * @description Searchbar component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

import Searchbar from './Snackbar';
import TMCSnackbar from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('Snackbar', () => {
  it('should render without crashing', () => {
    it('should render without crashing', () => {
      shallow(<TMCSnackbar message="hi" />);
      expect(true).toBe(true);
    });
  });
});