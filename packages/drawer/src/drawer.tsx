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

const useStyles = (width: number) => (makeStyles((theme) => {
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
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  });
})());

export function ResponsiveDrawer({
  open,
  setOpen,
  width = 350,
  className = '',
  children,
}: ResponsiveDrawerProps) {
  const classes = useStyles(width);
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

export const useResponsiveDrawer = ({
  width = 350,
}: {
  width?: number,
} = {}) => {
  const classes = useStyles(width);
  const [open, setOpen] = React.useState(false);
  const Drawer = React.useMemo(() => {
    return ({
      children,
      className = '',
    }: {
      children: React.ReactNode,
      className?: string,
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
  }, [open, setOpen, width]);

  const MenuButton = React.useMemo(() => {
    return ({
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
  }, [classes.menuButton, setOpen]);

  const Main = React.useMemo(() => {
    return ({
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
