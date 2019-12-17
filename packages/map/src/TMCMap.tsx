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

interface IMapProps {
  position?: [number, number],
  tileURL?: string,
  initZoom?: number,
  children?: React.ReactNode,
}

interface IPolyProps {
  path: [number, number][],
  color?: string,
  weight?: number,
  children?: React.ReactNode,
}

interface IMarkerOptions {
  icon: Icon,
  keyboard: boolean,
  title: string,
  alt: string,
  zIndexOffset: number,
  opacity: number,
  riseOnHover: boolean,
  riseOffset: number,
  pane: string,
  bubblingMouseEvents: boolean,
}

interface IMarkerProps {
  position: [number, number],
  children?: React.ReactNode,
  markerOptions: Partial<IMarkerOptions>
}

const OSM_ATTR = `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`;
const DEFAULT_CENTER: [number, number] = [39.8, -86.16];

const MAP_STYLES: {
  height: string,
  width: string,
  position: 'absolute',
} = {
  height: "calc(100vh - 64px)",
  width: '100%',
  position: 'absolute',
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
  children,
}: IMapProps) => (
  <Map
    center={position}
    zoom={initZoom}
    style={MAP_STYLES}
  >
    <TileLayer
      attribution={OSM_ATTR}
      url={tileURL}
    />
    {children}
  </Map>
);

TMCMap.defaultProps = {
  position: DEFAULT_CENTER,
  tileURL: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  initZoom: 11,
  children: undefined,
};

TMCMap.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  tileURL: PropTypes.string,
  initZoom: PropTypes.number,
  children: PropTypes.node,
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
  children,
}: IPolyProps) => (
  children
    ? (
        <Polyline
          positions={path}
          color={color}
          weight={weight}
        >
          <Popup>
            {children}
          </Popup>
        </Polyline>
    ) : (
      <Polyline
        positions={path}
        color={color}
        weight={weight}
      />
    )
);

TMCPoly.defaultProps = {
  color: '#0F0',
  weight: 5,
  children: undefined,
};

TMCPoly.propTypes = {
  path: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  color: PropTypes.string,
  weight: PropTypes.number,
  children: PropTypes.node,
};

export const TMCMarker = ({
  position,
  markerOptions = {},
  children,
}: IMarkerProps) => {
  const L = window.L;
  const icon = L.icon({
    iconUrl: `data:image/png;base64, ${markerIconImg}`,
    iconSize: [38, 55]
  });

  const opts = {
    icon,
    ...markerOptions,
  };

  return (
    children
      ? (
        <Marker {...opts} position={position}>
          <Popup>
            {children}
          </Popup>
        </Marker>
      )
      : <Marker {...opts} position={position} />
  )
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
    bubblingMouseEvents: PropTypes.bool,
  }),
};

TMCMarker.defaultProps = {
  markerOptions: {},
};
