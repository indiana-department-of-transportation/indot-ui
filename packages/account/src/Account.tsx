/**
 * Account.js
 *
 * @description Account icon and menu for TMC react applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Redirect } from 'react-router-dom';

import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import AccountCirleOutlined from '@material-ui/icons/AccountCircleOutlined';

import { useUser } from '@indot/usetmcuser';

/**
 * @description React Hook for generating classes used by the Account component.
 */
export const useAccountStyles = makeStyles(() => ({
  icon: {
    position: 'relative',
    width: '48px',
    height: '48px',
  },
}));

/**
 * @description An account management component.
 *
 * @param {Object} [props] The props object.
 * @param {Function} props.logoff Function to log the user off.
 * @returns {React.FunctionComponent} The account management component.
 */
export const Account = ({
  logoff,
  className = '',
}: {
  logoff: () => void,
  className?: string,
}) => {
  const user = useUser();
  const userName = user?.user_name || '';
  const classes = useAccountStyles();
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [redirected, setRedirected] = useState(false);
  const logout = () => {
    logoff();
    setRedirected(true);
  };

  return (
    redirected
      ? <Redirect to="/login" />
      : (
        <React.Fragment>
          <Tooltip title={userName}>
            <AccountCirleOutlined
              className={clsx(classes.icon, className)}
              aria-haspopup
              onClick={(evt: React.SyntheticEvent) => setAnchor(evt.target as HTMLElement)}
            />
          </Tooltip>
          <Menu
            open={Boolean(anchor)}
            id="acct-menu"
            onClose={() => setAnchor(undefined)}
            anchorEl={anchor}
          >
            <MenuItem disabled>{userName}</MenuItem>
            <MenuItem onClick={logout} className="logoff">Log Off</MenuItem>
          </Menu>
        </React.Fragment>
      )
  );
};

Account.propTypes = {
  logoff: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Account;
