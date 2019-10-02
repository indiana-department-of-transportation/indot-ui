/**
 * NColumnGrid.tsx
 *
 * @description Arranges items in a responsive, 1, 2, or 3 column grid.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import { ReactNode } from 'react';
import PropTypes from 'prop-types';
declare type onetwothree = 1 | 2 | 3;
declare type NColumnGridProps = {
    items: Array<ReactNode>;
    columns?: onetwothree;
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
    ({ items, columns }: NColumnGridProps): JSX.Element;
    defaultProps: {
        columns: number;
    };
    propTypes: {
        items: PropTypes.Validator<(PropTypes.ReactElementLike | null | undefined)[]>;
        columns: PropTypes.Requireable<number>;
    };
};
export default NColumnGrid;
