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
import { Icon, DivIcon } from 'leaflet';
export declare const DEFAULT_MARKER_ICON: Icon<import("leaflet").IconOptions>;
interface IMarkerOptions {
    icon: DivIcon | Icon | undefined;
    keyboard: boolean;
    title: string;
    alt: string;
    zIndexOffset: number;
    opacity: number;
    riseOnHover: boolean;
    riseOffset: number;
    pane: string;
    bubblingMouseEvents: boolean;
}
interface IMarkerProps {
    position: [number, number];
    tooltip?: React.ReactNode;
    children?: React.ReactNode;
    markerOptions: Partial<IMarkerOptions>;
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
export declare const TMCMarker: {
    ({ position, tooltip, markerOptions, children, }: IMarkerProps): JSX.Element;
    propTypes: {
        position: PropTypes.Validator<(number | null | undefined)[]>;
        tooltip: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        markerOptions: PropTypes.Requireable<PropTypes.InferProps<{
            icon: PropTypes.Requireable<Icon<import("leaflet").BaseIconOptions>>;
            keyboard: PropTypes.Requireable<boolean>;
            title: PropTypes.Requireable<string>;
            alt: PropTypes.Requireable<string>;
            zIndexOffset: PropTypes.Requireable<number>;
            opacity: PropTypes.Requireable<number>;
            riseOnHover: PropTypes.Requireable<boolean>;
            riseOffset: PropTypes.Requireable<number>;
            pane: PropTypes.Requireable<string>;
            bubblingMouseEvents: PropTypes.Requireable<boolean>;
        }>>;
    };
    defaultProps: {
        tooltip: undefined;
        markerOptions: {};
    };
};
export default TMCMarker;
