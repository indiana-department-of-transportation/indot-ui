/**
 * TMCPoly.tsx
 *
 * @description Leaflet polyline component for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Polyline } from 'react-leaflet';

/**
 * @description The TMC leaflet polyline component.
 *
 * @param [props] The destructured props object.
 * @param props.path {Array} The array of latlng pairs to define the geometry.
 * @param props.color {string} The stroke color for the line. Defaults to green.
 * @param props.weight {number} The stroke weight. Defaults to 5.
 * @param props.children {React.ReactNode} The React children.
 * @returns {React.FunctionComponent} The map component.
 */
export const TMCPoly = ({
  path,
  color = '#0F0',
  weight = 5,
  children
}) => children ? React.createElement(Polyline, {
  positions: path,
  color: color,
  weight: weight
}, React.createElement(Popup, null, children)) : React.createElement(Polyline, {
  positions: path,
  color: color,
  weight: weight
});
TMCPoly.defaultProps = {
  color: '#0F0',
  weight: 5,
  children: undefined
};
TMCPoly.propTypes = {
  path: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  color: PropTypes.string,
  weight: PropTypes.number,
  children: PropTypes.node
};
export default TMCPoly;