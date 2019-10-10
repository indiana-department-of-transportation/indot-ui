/**
 * appbar.tsx
 *
 * @description AppBar header for the ITS Ticketing project.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import theme from '../../indot-material-theme/src/theme';

// @ts-ignore
import INDOTLogo from '../img/indot.png';

interface IAppBarProps {
  title: string | ReactNode,
  Searchbar: ReactNode,
  Account: ReactNode,
}

/**
 * @description App bar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @param {React.Component} props.Account An optional account management component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
export const TMCAppBar = ({
  title,
  Searchbar,
  Account
}: IAppBarProps) => (
  <AppBar>
    <ToolBar>
      <Link to="/">
        <img
          src={INDOTLogo}
          alt="INDOT logo"
          style={{ width: '48px', height: '48px' }}
        />
      </Link>
      <Typography variant="h6" style={{ marginLeft: theme.spacing(2) }}>
        {title}
      </Typography>
      {Searchbar}
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        flexGrow: 4,
      }}
      >
        {Account}
      </div>
    </ToolBar>
  </AppBar>
);

TMCAppBar.defaultProps = {
  Searchbar: null,
  Account: null,
};

TMCAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  Searchbar: PropTypes.element,
  Account: PropTypes.element,
};

export default TMCAppBar;
