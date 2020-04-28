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
interface IMapProps {
    position?: [number, number];
    tileURL?: string;
    initZoom?: number;
    children?: React.ReactNode;
    className?: string;
    isFullScreen?: boolean;
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
    ({ position, tileURL, initZoom, className, isFullScreen, children, }: IMapProps): JSX.Element;
    defaultProps: {
        position: [number, number];
        tileURL: string;
        initZoom: number;
        children: undefined;
        className: string;
        isFullScreen: boolean;
    };
    propTypes: {
        position: PropTypes.Requireable<(number | null | undefined)[]>;
        tileURL: PropTypes.Requireable<string>;
        initZoom: PropTypes.Requireable<number>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        isFullScreen: PropTypes.Requireable<boolean>;
    };
};
export default TMCMap;
