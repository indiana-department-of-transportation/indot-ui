/**
 * PageContent.js
 *
 * @description A container component for page content.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface IPageContentProps {
  title: string,
  children: ReactNode,
  scrollable?: boolean,
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    width: '95%',
    height: '75vh',
    position: 'relative',
    top: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
    overflowY: 'scroll',
  },
  title: {
    color: '#000',
    textAlign: 'center',
  },
  titleContainer: {
    borderBottom: '1px solid #000',
    marginBottom: theme.spacing(3),
    minWidth: '200px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  scrollable: {
    overflowY: 'scroll',
  },
}));

/**
 * @description Page content container component.
 *
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The page title.
 * @param {React.ReactNode} props.children The child components.
 * @param {boolean} props.scrollable Whether the container is scrollable.
 * @returns {React.FunctionComponent} The container component.
 */
export const PageContent = ({
  title,
  children,
  scrollable = false,
}: IPageContentProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.titleContainer}>
          <Typography variant="h6" className={classes.title} gutterBottom>
            {title}
          </Typography>
        </div>
        <div className={scrollable ? classes.scrollable : ''}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

PageContent.defaultProps = {
  scrollable: false,
};

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  scrollable: PropTypes.bool,
};

export default PageContent;
