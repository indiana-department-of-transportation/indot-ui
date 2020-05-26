/**
 * index.tsx
 *
 * @description Main file for INDOT React Logo components.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2020
 */
import React from 'react';
import logo from './indot-logo';

/**
 * @description Logo with the Seal of Indiana.
 */
export const INDOTLogo = ({
  className = '',
} = {}) => (
  <img
    src={`data:image/png;base64, ${logo}`}
    alt="INDOT logo"
    style={{ width: '48px', height: '48px' }}
    className={className}
  />
);

export default INDOTLogo;
