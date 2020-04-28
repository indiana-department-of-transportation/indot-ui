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
import clsx from 'clsx';
import { Map, TileLayer } from 'react-leaflet';
import { makeStyles } from '@material-ui/styles';
const OSM_ATTR = `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`;
const DEFAULT_CENTER = [39.8, -86.16];
const useMapStyles = makeStyles({
  defaultMap: {
    height: '300px',
    width: '400px'
  },
  fullscreen: {
    height: "calc(100vh - 64px)",
    width: '100%',
    position: 'absolute',
    top: '64px'
  }
});
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
  className = '',
  isFullScreen = false,
  children
}) => {
  const classes = useMapStyles();
  return /*#__PURE__*/React.createElement(Map, {
    center: position,
    zoom: initZoom,
    className: clsx(isFullScreen ? classes.fullscreen : classes.defaultMap, className)
  }, /*#__PURE__*/React.createElement(TileLayer, {
    attribution: OSM_ATTR,
    url: tileURL
  }), children);
};
TMCMap.defaultProps = {
  position: DEFAULT_CENTER,
  tileURL: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  initZoom: 11,
  children: undefined,
  className: '',
  isFullScreen: false
};
TMCMap.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  tileURL: PropTypes.string,
  initZoom: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  isFullScreen: PropTypes.bool
};
export default TMCMap;