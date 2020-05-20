/**
 * appbar.tsx
 *
 * @description AppBar header for the ITS Ticketing project.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, {
  ReactNode
} from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar, {
  ToolbarProps
} from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';

import INDOTLogo from './indot-logo';

export const AppbarLogo = () => (
  <Link to="/">
    <img
      src={`data:image/png;base64, ${INDOTLogo}`}
      alt="INDOT logo"
      style={{ width: '48px', height: '48px' }}
    />
  </Link>
);

export type Titled = {
  title: string,
};

export const AppbarTitle = ({
  title
}: Titled) => {
  const theme = useTheme();
  return (
    <Typography variant="h6" style={{ marginLeft: theme.spacing(2) }}>
      {title}
    </Typography>
  );
};

export type AppbarBaseProps = {
  className?: string,
  ToolBarProps?: ToolbarProps,
  children?: ReactNode,
}

export const AppbarBase = ({
  className = '',
  ToolBarProps = {},
  children,
}: AppbarBaseProps) => {
  return (
    <AppBar className={className}>
      <ToolBar {...ToolBarProps}>
        {children}
      </ToolBar>
    </AppBar>
  );
};

export type TMCAppbarProps = AppbarBaseProps & Titled;

export const TMCAppbar = ({
  title,
  className,
  ToolBarProps,
  children
}: TMCAppbarProps) => (
  <AppbarBase
    className={className}
    ToolBarProps={ToolBarProps}
  >
    <AppbarLogo />
    <AppbarTitle title={title} />
    {children}
  </AppbarBase>
);

export default TMCAppbar;
