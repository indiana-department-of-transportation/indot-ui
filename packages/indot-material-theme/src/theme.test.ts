/**
 * theme.test.ts
 *
 * @description Tests for Material UI theme for INDOT React projects.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import theme from './theme';

describe('theme', () => {
  it('should have INDOT colors', () => {
    expect(theme.palette.primary.main).toBe('#0c2440');
    expect(theme.palette.secondary.main).toBe('#cfa926');
  });
});
