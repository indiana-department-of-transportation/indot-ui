/**
 * NColumnGrid.tsx
 *
 * @description Arranges items in a responsive, 1, 2, or 3 column grid.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
export declare const useNColumnStyles: (props?: any) => Record<"root", string>;
declare type onetwothree = 1 | 2 | 3;
declare type NColumnGridProps = {
    items?: Array<ReactNode>;
    columns?: onetwothree;
    children?: React.ReactNode;
    className?: string;
};
/**
 * @description Lays the passed-in array of components out in a n-column
 * responsive grid.
 *
 * @param {Object} [props] The props object.
 * @param {Array} props.items The items to render in a 1, 2, or 3 responsive column grid.
 * @param {number} props.columns The number of columns for the layout.
 * @returns {React.Component} The layout component.
 */
export declare const NColumnGrid: {
    ({ children, items, columns, className, }: NColumnGridProps): JSX.Element;
    defaultProps: {
        items: undefined;
        columns: number;
    };
    propTypes: {
        items: PropTypes.Requireable<(PropTypes.ReactElementLike | null | undefined)[]>;
        columns: PropTypes.Requireable<number>;
    };
};
export default NColumnGrid;
