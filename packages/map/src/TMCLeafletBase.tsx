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
export const TMCLeafletBase = <P extends {}>({
  Component,
  componentProps,
  tooltip,
  children,
}: {
  Component: new (props: any) => React.Component,
  componentProps?: P,
  tooltip?: React.ReactNode,
  children?: React.ReactNode,
}) => {
  const tt = typeof tooltip === 'string'
    ? <Tooltip>{tooltip}</Tooltip>
    : tooltip;

  const popup = children && <Popup>{children}</Popup>;
  return (
    <Component {...componentProps}>
      {tt}
      {popup}
    </Component>
  );
};

TMCLeafletBase.propTypes = {
  Component: PropTypes.func.isRequired,
  componentProps: PropTypes.object,
  tooltip: PropTypes.any,
  children: PropTypes.node,
};

TMCLeafletBase.defaultProps = {
  componentProps: undefined,
  tooltip: undefined,
  children: undefined,
};

export default TMCLeafletBase;
