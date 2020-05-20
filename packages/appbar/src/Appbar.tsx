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

export type Titled = {
  title: string,
};

export type AppbarBaseProps = {
  className?: string,
  ToolBarProps?: ToolbarProps,
  children?: ReactNode,
};

export type TMCAppbarProps = AppbarBaseProps & Titled;

/**
 * @description Logo component for the Appbar, links to homepage.
 */
export const AppbarLogo: React.FunctionComponent = () => (
  <Link to="/">
    <img
      src={`data:image/png;base64, ${INDOTLogo}`}
      alt="INDOT logo"
      style={{ width: '48px', height: '48px' }}
    />
  </Link>
);

/**
 * @descrpition Title component for the Appbar.
 * 
 * @param [props] Destructured React Props.
 * @param props.title The Appbar Title.
 * @returns The Appbar component.
 */
export const AppbarTitle: React.FunctionComponent<Titled> = ({
  title
}: Titled) => {
  const theme = useTheme();
  return (
    <Typography variant="h6" style={{ marginLeft: theme.spacing(2) }}>
      {title}
    </Typography>
  );
};

AppbarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

/**
 * @description A Base component for TMC Appbars.
 * 
 * @param [props] The destructured React props.
 * @param props.className CSS classes for the component.
 * @param props.ToolBarProps Props for the toolbar component.
 * @param props.children The React children.
 * @returns The AppbarBase component.
 */
export const AppbarBase: React.FunctionComponent<AppbarBaseProps> = ({
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

AppbarBase.propTypes = {
  className: PropTypes.string,
  ToolBarProps: PropTypes.object,
  children: PropTypes.node,
};

/**
 * @description Generic TMCAppbar Component.
 * 
 * @param [props] Destructured React Props.
 * @param props.title The Appbar Title
 * @param props.className CSS classes for the component.
 * @param props.ToolBarProps Props for the underlying Toolbar component.
 * @param props.children The React Children.
 * @returns The TMCAppbar component.
 */
export const TMCAppbar: React.FunctionComponent<TMCAppbarProps> = ({
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

TMCAppbar.propTypes = {
  title: PropTypes.string.isRequired,
  ...AppbarBase.propTypes,
};

export default TMCAppbar;
