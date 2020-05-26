/**
 * drawer.tsx
 *
 * @description Responsive side drawer.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

export type ResponsiveDrawerProps = {
  open: boolean,
  setOpen: (x: boolean) => void,
  width?: number,
  className?: string,
  children: React.ReactNode,
}

/**
 * @description Style hook for ResponsiveDrawer component.
 * 
 * @param width The drawer width.
 * @returns React Hook for the ResponsiveDrawer styles.
 */
export const useResponsiveDrawerStyles = (width: number) => (makeStyles((theme) => {
  const drawerWidth = `${width}px`;
  return ({
    drawer: {
      [theme.breakpoints.up('lg')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    mainContainer: {
      width: `calc(100% - ${drawerWidth})`,
      height: '100%',
      left: drawerWidth,
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        left: 0,
      },
    },
    menuButton: {
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
  });
})());

/**
 * @description A responsive side drawer component.
 * 
 * @param [props] The destructured React props.
 * @param props.open Whether or not the drawer is open.
 * @param props.setOpen Sets the open state of the drawer.
 * @param props.width Width of the drawer, in pixels. Defaults to 320.
 * @param props.className CSS classes for the underlying drawer.
 * @param props.children React children.
 * @returns The ResponsiveDrawer component.
 */
export const ResponsiveDrawer: React.FunctionComponent<ResponsiveDrawerProps> = ({
  open,
  setOpen,
  width = 320,
  className = '',
  children,
}: ResponsiveDrawerProps) => {
  const classes = useResponsiveDrawerStyles(width);
  const close = (_evt: React.SyntheticEvent) => setOpen(false);
  return (
    <>
      <Hidden lgUp implementation='css'>
        <Drawer
          className={clsx(classes.drawer, className)}
          anchor="left"
          variant="temporary"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            onBackdropClick: close,
          }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation='css'>
        <Drawer
          className={clsx(classes.drawer, className)}
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {children}
        </Drawer>
      </Hidden>
    </>
  );
};

ResponsiveDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  width: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * @description Custom React Hook for using a responsive side drawer.
 * 
 * @param [params] The destructured parameters.
 * @param params.width Width of the drawer, in pixels. Defaults to 320.
 * @returns Drawer component, MenuButton component, Main component, and a
 * state hook for using/setting the open state of the drawer. 
 */
export const useResponsiveDrawer = ({
  width = 320,
}: {
  width?: number,
} = {}) => {
  const classes = useResponsiveDrawerStyles(width);
  const [open, setOpen] = React.useState(false);
  const Drawer = React.useMemo(() => {
    const Drawer: React.FunctionComponent<{
      className?: string,
      children: React.ReactNode,
    }> = ({
      children,
      className = '',
    }) => (
          <ResponsiveDrawer
            open={open}
            setOpen={setOpen}
            width={width}
            className={className}
          >
            {children}
          </ResponsiveDrawer>
        );

    Drawer.propTypes = {
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
    };

    return Drawer;
  }, [open, setOpen, width]);

  const MenuButton = React.useMemo(() => {
    const MenuButton: React.FunctionComponent<{ className?: string }> = ({
      className = ''
    }) => (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={() => setOpen(true)}
          className={clsx(classes.menuButton, className)}
        >
          <MenuIcon />
        </IconButton>
      );

    MenuButton.propTypes = {
      className: PropTypes.string,
    };

    return MenuButton;
  }, [classes.menuButton, setOpen]);

  const Main = React.useMemo(() => {
    const Main: React.FunctionComponent<{
      className?: string,
      children: React.ReactNode,
    }> = ({
      children,
      className = '',
    }: {
      children: React.ReactNode,
      className?: string,
    }) => {
        return (
          <main className={clsx(classes.mainContainer, className)}>
            {children}
          </main>
        );
      };

    Main.propTypes = {
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
    };

    return Main;
  }, [classes.mainContainer]);

  const useResponsiveDrawerState = React.useMemo(() => {
    return () => [open, setOpen];
  }, [open, setOpen]);

  return {
    Main,
    Drawer,
    MenuButton,
    useResponsiveDrawerState,
  };
};
