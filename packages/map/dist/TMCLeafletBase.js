/**
 * TMCLeafletBase.tsx
 *
 * @description Convenience leaflet component for TMC React applications. Base for
 * marker, polyline components.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Tooltip } from 'react-leaflet';
/**
 * @description The TMC leaflet base component.
 *
 * @param [props] The destructured props object.
 * @param props.Component {Function} The function to generate the displayed component.
 * @param props.componentProps {Object} The props to pass to the rendered component.
 * @param props.tooltip {String|React.ReactNode} Optional tooltip node/string.
 * @param props.children {React.ReactNode} The React children.
 * @returns {React.FunctionComponent} The rendered component.
 */

export const TMCLeafletBase = ({
  Component,
  componentProps,
  tooltip,
  children
}) => {
  const tt = typeof tooltip === 'string' ? React.createElement(Tooltip, null, tooltip) : tooltip;
  const popup = children && React.createElement(Popup, null, children);
  return React.createElement(Component, componentProps, tt, popup);
};
TMCLeafletBase.propTypes = {
  Component: PropTypes.func.isRequired,
  componentProps: PropTypes.object,
  tooltip: PropTypes.any,
  children: PropTypes.node
};
TMCLeafletBase.defaultProps = {
  componentProps: undefined,
  tooltip: undefined,
  children: undefined
};
export default TMCLeafletBase;