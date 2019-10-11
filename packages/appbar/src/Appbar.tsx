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

import { Link } from 'react-router-dom';
import { emptyFn, IPojo } from '@jasmith79/ts-utils';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Accnt from '@indot/account';
// import theme from '@indot/material-theme'

import * as INDOTLogo from '../img/indot.png';

interface IAppbarUser extends IPojo {
  userName: string,
}

interface IPlainAppBarProps {
  title: string | ReactNode,
  Searchbar?: ReactNode,
}

interface ILoginAppbarProps extends IPlainAppBarProps {
  Account: ReactNode,
  user: IAppbarUser,
  logoff: () => void,
}

/**
 * @description A simple app bar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
export const TMCAppbar = ({
  title,
  Searchbar,
}: IPlainAppBarProps) => (
    <AppBar>
      <ToolBar>
        <Link to="/">
          <img
            src={String(INDOTLogo)}
            alt="INDOT logo"
            style={{ width: '48px', height: '48px' }}
          />
        </Link>
        <Typography variant="h6" style={{ marginLeft: '10px' }}>
          {title}
        </Typography>
        {Searchbar}
      </ToolBar>
    </AppBar>
);

TMCAppbar.defaultProps = {
  Searchbar: undefined,
};

TMCAppbar.propTypes = {
  title: PropTypes.string.isRequired,
  Searchbar: PropTypes.node,
};

/**
 * @description An app bar for TMC Applications with login and account management.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @param {Object} props.user The logged in user.
 * @param {Function} props.logoff The logoff function.
 * @param {React.Component} props.Account An optional account management component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
export const TMCUserAppbar = ({
  title,
  Searchbar,
  user = { userName: '' },
  logoff = emptyFn,
  Account = <Accnt userName={user.userName} logoff={logoff} />,
}: ILoginAppbarProps) => (
  <AppBar>
    <ToolBar>
      <Link to="/">
        <img
          src={INDOTLogo}
          alt="INDOT logo"
          style={{ width: '48px', height: '48px' }}
        />
      </Link>
      <Typography variant="h6" style={{ marginLeft: '10px' }}>
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

TMCUserAppbar.defaultProps = {
  user: { userName: '' },
  logoff: emptyFn,
  Account: <Accnt userName={''} logoff={emptyFn} />,
};

TMCUserAppbar.propTypes = {
  title: PropTypes.string.isRequired,
  Searchbar: PropTypes.node,
  user: PropTypes.shape({
    userName: PropTypes.string,
  }),
  logoff: PropTypes.func,
  Account: PropTypes.node,
};

export default TMCAppbar;
