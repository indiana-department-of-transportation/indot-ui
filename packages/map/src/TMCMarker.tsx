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
import { Popup, Marker } from 'react-leaflet';

import markerIconImg from './marker-icon';

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
  children?: React.ReactNode,
  markerOptions: Partial<IMarkerOptions>
}

export const TMCMarker = ({
  position,
  markerOptions = {},
  children,
}: IMarkerProps) => {
  const icon = LeafletIcon({
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

export default TMCMarker;
