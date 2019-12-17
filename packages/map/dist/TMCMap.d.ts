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
interface IMapProps {
    position?: [number, number];
    tileURL?: string;
    initZoom?: number;
    children?: React.ReactNode;
}
interface IPolyProps {
    path: [number, number][];
    color?: string;
    weight?: number;
    children?: React.ReactNode;
}
interface IMarkerOptions {
    icon: Icon;
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
    children?: React.ReactNode;
    markerOptions: Partial<IMarkerOptions>;
}
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
export declare const TMCMap: {
    ({ position, tileURL, initZoom, children, }: IMapProps): JSX.Element;
    defaultProps: {
        position: [number, number];
        tileURL: string;
        initZoom: number;
        children: undefined;
    };
    propTypes: {
        position: PropTypes.Requireable<(number | null | undefined)[]>;
        tileURL: PropTypes.Requireable<string>;
        initZoom: PropTypes.Requireable<number>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
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
export declare const TMCPoly: {
    ({ path, color, weight, children, }: IPolyProps): JSX.Element;
    defaultProps: {
        color: string;
        weight: number;
        children: undefined;
    };
    propTypes: {
        path: PropTypes.Validator<((number | null | undefined)[] | null | undefined)[]>;
        color: PropTypes.Requireable<string>;
        weight: PropTypes.Requireable<number>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export declare const TMCMarker: {
    ({ position, markerOptions, children, }: IMarkerProps): JSX.Element;
    propTypes: {
        position: PropTypes.Validator<(number | null | undefined)[]>;
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
        markerOptions: {};
    };
};
export {};
