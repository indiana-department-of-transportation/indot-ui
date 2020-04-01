/**
 * TMCMap.tsx
 *
 * @description Leaflet map component for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
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
}) => /*#__PURE__*/React.createElement(Map, {
  center: position,
  zoom: initZoom,
  style: MAP_STYLES
}, /*#__PURE__*/React.createElement(TileLayer, {
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
export default TMCMap;