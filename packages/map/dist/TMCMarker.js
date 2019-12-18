function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { Popup, Marker } from 'react-leaflet';
import markerIconImg from './marker-icon';
export const TMCMarker = ({
  position,
  markerOptions = {},
  children
}) => {
  const icon = LeafletIcon({
    iconUrl: `data:image/png;base64, ${markerIconImg}`,
    iconSize: [38, 55]
  });

  const opts = _objectSpread({
    icon
  }, markerOptions);

  return children ? React.createElement(Marker, _extends({}, opts, {
    position: position
  }), React.createElement(Popup, null, children)) : React.createElement(Marker, _extends({}, opts, {
    position: position
  }));
};
TMCMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
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
  markerOptions: {}
};
export default TMCMarker;