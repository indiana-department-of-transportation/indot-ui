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

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

type onetwothree = 1 | 2 | 3;

type NColumnGridProps = {
  items: Array<ReactNode>,
  columns?: onetwothree,
}

/**
 * @description Lays the passed-in array of components out in a n-column
 * responsive grid.
 *
 * @param {Object} [props] The props object.
 * @param {Array} props.items The items to render in a 1, 2, or 3 responsive column grid.
 * @param {number} props.columns The number of columns for the layout.
 * @returns {React.Component} The layout component.
 */
export const NColumnGrid = ({ items, columns = 3 }: NColumnGridProps) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={1}
      className={classes.root}
    >
      {
        // No good way to do this.
        // eslint-disable-next-line react/no-array-index-key
        items.map((Item, i) => (
          <Grid item xs={12} lg={(12 / columns) as onetwothree} key={i}>{Item}</Grid>
        ))
      }
    </Grid>
  );
};

NColumnGrid.defaultProps = {
  columns: 3,
};

NColumnGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  columns: PropTypes.oneOf([1, 2, 3]),
};

export default NColumnGrid;
