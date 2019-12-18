/**
 * TMCPoly.tsx
 *
 * @description Leaflet polyline component for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React from 'react';
import PropTypes from 'prop-types';
interface IPolyProps {
    path: [number, number][];
    color?: string;
    weight?: number;
    tooltip?: React.ReactNode;
    children?: React.ReactNode;
}
/**
 * @description The TMC leaflet polyline component.
 *
 * @param [props] The destructured props object.
 * @param props.path {Array} The array of latlng pairs to define the geometry.
 * @param props.color {string} The stroke color for the line. Defaults to green.
 * @param props.weight {number} The stroke weight. Defaults to 5.
 * @param props.tooltip {String|React.ReactNode} Optional tooltip node/string.
 * @param props.children {React.ReactNode} The React children.
 * @returns {React.FunctionComponent} The map component.
 */
export declare const TMCPoly: {
    ({ path, color, weight, tooltip, children, }: IPolyProps): JSX.Element;
    defaultProps: {
        color: string;
        weight: number;
        tooltip: undefined;
        children: undefined;
    };
    propTypes: {
        path: PropTypes.Validator<((number | null | undefined)[] | null | undefined)[]>;
        color: PropTypes.Requireable<string>;
        weight: PropTypes.Requireable<number>;
        tooltip: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default TMCPoly;
