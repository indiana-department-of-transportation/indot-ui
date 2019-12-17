function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TMCMap.tsx
 *
 * @description Leaflet components for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'leaflet';
import { Map, Popup, TileLayer, Polyline, Marker } from 'react-leaflet';
import markerIconImg from './marker-icon';
const OSM_ATTR = `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`;
const DEFAULT_CENTER = [39.8, -86.16];
const MAP_STYLES = {
  height: "calc(100vh - 64px)",
  width: '100%',
  position: 'absolute'
};
/**
 * @description The TMC leaflet map component.
 *
 * @param [props] The destructured props object.
 * @param props.position {Array} The latlng pair to center the map on.
 * @param props.tileURL {string} The url for the tileset.
 * @param props.initZoom {number} The zoom level to start with.
 * @param props.children {React.ReactNode} The React children.
 * @returns {React.FunctionComponent} The map component.
 */

export const TMCMap = ({
  position = DEFAULT_CENTER,
  tileURL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  initZoom = 11,
  children
}) => React.createElement(Map, {
  center: position,
  zoom: initZoom,
  style: MAP_STYLES
}, React.createElement(TileLayer, {
  attribution: OSM_ATTR,
  url: tileURL
}), children);
TMCMap.defaultProps = {
  position: DEFAULT_CENTER,
  tileURL: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  initZoom: 11,
  children: undefined
};
TMCMap.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  tileURL: PropTypes.string,
  initZoom: PropTypes.number,
  children: PropTypes.node
};
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
export const TMCMarker = ({
  position,
  markerOptions = {},
  children
}) => {
  const L = window.L;
  const icon = L.icon({
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