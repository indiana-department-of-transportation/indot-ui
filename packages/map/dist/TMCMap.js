/**
 * TMCMap.tsx
 *
 * @description Leaflet map component for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Map, TileLayer } from 'react-leaflet';
import { makeStyles } from '@material-ui/styles';
import { emptyFn } from '@jasmith79/ts-utils';
const OSM_ATTR = `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`;
const DEFAULT_CENTER = [39.8, -86.16];
export const useMapStyles = makeStyles({
  defaultMap: {
    height: '300px',
    width: '400px'
  },
  fullscreen: {
    height: "calc(100vh - 64px)",
    width: '100vw',
    position: 'absolute',
    top: '64px',
    overflow: 'hidden'
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

export const TMCMap = props => {
  const {
    position = DEFAULT_CENTER,
    tileURL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    initZoom = 11,
    className = '',
    isFullScreen = false,
    onMoveEnd = emptyFn,
    onZoomStart = emptyFn,
    children
  } = props;
  const classes = useMapStyles();
  const map = useRef();
  useEffect(() => {
    // This works around a bug where depending on how the height of the
    // map container is set the tiles don't use the full space to render.
    window.dispatchEvent(new Event('resize'));
  });
  return /*#__PURE__*/React.createElement(Map, {
    ref: map,
    onMoveEnd: onMoveEnd,
    onZoomStart: onZoomStart,
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