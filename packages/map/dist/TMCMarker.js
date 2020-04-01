function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TMCMarker.tsx
 *
 * @description Leaflet Marker component for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React from 'react';
import PropTypes from 'prop-types';
import { icon as LeafletIcon, Icon } from 'leaflet';
import { Marker } from 'react-leaflet';
import TMCLeafletBase from './TMCLeafletBase';
import markerIconImg from './marker-icon';
export const DEFAULT_MARKER_ICON = LeafletIcon({
  iconUrl: `data:image/png;base64, ${markerIconImg}`,
  iconSize: [38, 55]
});

/**
 * @description The TMC leaflet marker component.
 *
 * @param [props] The destructured props object.
 * @param props.position {Array} The latlng pair to center the map on.
 * @param props.tooltip {String|React.ReactNode} Optional tooltip node/string.
 * @param props.markerOptions {Object} The leaflet marker options.
 * @param props.children {React.ReactNode} The React children.
 * @returns {React.FunctionComponent} The map component.
 */
export const TMCMarker = ({
  position,
  tooltip,
  markerOptions = {},
  children
}) => {
  const opts = _objectSpread({
    icon: DEFAULT_MARKER_ICON
  }, markerOptions, {
    position
  });

  return /*#__PURE__*/React.createElement(TMCLeafletBase, {
    Component: Marker,
    componentProps: opts,
    tooltip: tooltip
  }, children);
};
TMCMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  tooltip: PropTypes.node,
  markerOptions: PropTypes.shape({
    icon: PropTypes.instanceOf(Icon),
    keyboard: PropTypes.bool,
    title: PropTypes.string,
    alt: PropTypes.string,
    zIndexOffset: PropTypes.number,
    opacity: PropTypes.number,
    riseOnHover: PropTypes.bool,
    riseOffset: PropTypes.number,
    pane: PropTypes.string,
    bubblingMouseEvents: PropTypes.bool
  })
};
TMCMarker.defaultProps = {
  tooltip: undefined,
  markerOptions: {}
};
export default TMCMarker;