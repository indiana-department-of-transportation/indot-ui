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
import {
  icon as LeafletIcon,
  Icon,
  DivIcon,
} from 'leaflet';
import { Marker } from 'react-leaflet';

import TMCLeafletBase from './TMCLeafletBase';
import markerIconImg from './marker-icon';

export const DEFAULT_MARKER_ICON = LeafletIcon({
  iconUrl: `data:image/png;base64, ${markerIconImg}`,
  iconSize: [38, 55]
});

interface IMarkerOptions {
  icon: DivIcon | Icon | undefined,
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
  tooltip?: React.ReactNode,
  children?: React.ReactNode,
  markerOptions: Partial<IMarkerOptions>
}

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
  children,
}: IMarkerProps) => {
  const opts = {
    icon: DEFAULT_MARKER_ICON,
    ...markerOptions,
    position,
  };

  return (
    <TMCLeafletBase Component={Marker} componentProps={opts} tooltip={tooltip}>
      {children}
    </TMCLeafletBase>
  );
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
    bubblingMouseEvents: PropTypes.bool,
  }),
};

TMCMarker.defaultProps = {
  tooltip: undefined,
  markerOptions: {},
};

export default TMCMarker;
