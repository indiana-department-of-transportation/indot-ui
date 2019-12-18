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
    children?: React.ReactNode;
    markerOptions: Partial<IMarkerOptions>;
}
export declare const TMCMarker: {
    ({ position, markerOptions, children, }: IMarkerProps): JSX.Element;
    propTypes: {
        position: PropTypes.Validator<(number | null | undefined)[]>;
        markerOptions: PropTypes.Requireable<PropTypes.InferProps<{
            icon: PropTypes.Requireable<Icon<any>>;
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
export default TMCMarker;
