/**
 * TMCSnackbar.js
 *
 * @description Snackbar component for TMC React applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, {
  MouseEvent as MEvt,
  SyntheticEvent,
  ReactNode,
  FC,
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';

import { IPojo, emptyFn } from '@jasmith79/ts-utils';

enum variants {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}

interface IClickable {
  onClick: (evt: MEvt) => void,
}

interface IAnchor {
  vertical: 'top' | 'bottom',
  horizontal: 'left' | 'right' | 'center',
}

export interface ISnackbarProps {
  message: string | ReactNode,
  variant?: keyof typeof variants,
  timeout?: number,
  color?: 'primary' | 'secondary',
  action?: ReactNode,
  closer?: ReactNode,
  verticalAlign?: 'top' | 'bottom',
  horizontalAlign?: 'left' | 'right' | 'center',
  onAction?: (evt?: MEvt) => void,
  onClose?: (evt?: SyntheticEvent<any, Event>) => void,
  className?: string,
}

interface ISnackProps {
  open: boolean,
  className?: string,
  onClose?: (evt?: SyntheticEvent<any, Event>) => void,
  autoHideDuration?: number,
  anchorOrigin?: IAnchor,
}

interface IContentProps {
  message: ReactNode,
  className?: string,
  action?: ReactNode[],
}

const DEFAULT_ANCHOR: IAnchor = {
  horizontal: 'left',
  vertical: 'top',
};

const DEFAULT_SNACKBAR_PROPS: ISnackbarProps = {
  message: '',
  variant: undefined,
  color: 'primary',
  timeout: 5000,
  action: '',
  closer: undefined,
  verticalAlign: 'bottom',
  horizontalAlign: 'center',
  onAction: emptyFn,
  onClose: emptyFn,
  className: '',
};

export const useSnackStyles = makeStyles((theme: IPojo) => ({
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.dark,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const iconVariants = {
  [variants.success]: CheckCircleIcon,
  [variants.warning]: WarningIcon,
  [variants.error]: ErrorIcon,
  [variants.info]: InfoIcon,
};

/**
 * @description Default close button for the Snackbar. Can be overridden by passing a component
 * to the closer property of the constructor.
 *
 * @param {Object} [props] The destructured props.
 * @param {Function} props.onClick Optional click handler.
 * @returns {React.FunctionComponent} The default close button component.
 */
export const DefaultCloseButton = ({
  onClick,
}: {
  onClick: (evt: MEvt) => void,
}) => {
  const classes = useSnackStyles();
  return (
    <IconButton key="close" aria-label="Close" color="inherit" onClick={onClick}>
      <CloseIcon className={classes.icon} />
    </IconButton>
  );
};

DefaultCloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

/**
 * @description Default action button for the Snackbar. Can be overridden by passing a
 * component to the action property of the constructor.
 *
 * @param {Object} [props] The destructured props object.
 * @param {string} props.label The label for the button.
 * @param {Function} props.onClick Optional click handler.
 * @returns {React.FunctionComponent} The default action button component.
 */
export const DefaultActionButton = ({
  label,
  onClick,
}: {
  label: string | ReactNode,
  onClick: (evt: MEvt) => void,
}) => (
    <Button key="undo" color="secondary" size="small" onClick={onClick}>
      {label}
    </Button>
  );

DefaultActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * @description A Snackbar component for TMC React applicatons.
 *
 * @param {Object} [props] The destructured props object.
 * @param {string|React.Component} props.message The message to display.
 * @param {string} props.variant The variant, e.g. Success, info, error.
 * @param {number} props.timeout The display duration for the snackbar.
 * @param {string} props.color The theme color, overrides the variant color.
 * @param {string|React.Component} props.action The action button label/component.
 * @param {boolean|React.Component} props.closer Whether to include a close button/The close button
 * component.
 * @param {string} props.verticalAlign Vertical position for the snackbar.
 * @param {string} props.horizontalAlign Horizontal position for the snackbar.
 * @param {Function} props.onAction The callback for the action button.
 * @param {Function} props.onClose The callback for the close event, manual or automatic.
 * @param {string} props.className The style class from the caller.
 * @returns {React.FunctionComponent} The Snackbar component.
 */
export const TMCSnackbar = ({
  message,
  variant,
  timeout = 5000,
  color = 'primary',
  action = null,
  closer = null,
  verticalAlign = 'bottom',
  horizontalAlign = window.matchMedia('(width > 600px)').matches
    ? 'center'
    : 'left',
  onAction = emptyFn,
  onClose = emptyFn,
  className = '',
}: ISnackbarProps) => {
  const classes = useSnackStyles();
  const snackProps: ISnackProps = {
    onClose,
    open: Boolean(message),
  };

  const contentProps: IContentProps = {
    message: <span id="snackbar-message" className={classes.message}>{message}</span>,
  };

  if (className) {
    snackProps.className = className;
    contentProps.className = className;
  }
  if (color) {
    contentProps.className = clsx(className, classes[color]);
  }

  if (variant) {
    snackProps.className = clsx(className, classes[variant]);
    contentProps.className = clsx(className, classes[variant]);
    const Icon = iconVariants[variant];
    if (Icon) {
      contentProps.message = (
        <span id="snackbar-message" className={clsx(classes.message, classes[variant])}>
          <Icon className={clsx(classes.icon, classes.iconVariant, classes[variant])} />
          {message}
        </span>
      );
    }
  }

  if (timeout) snackProps.autoHideDuration = timeout;
  if (verticalAlign) {
    if (!snackProps.anchorOrigin) snackProps.anchorOrigin = DEFAULT_ANCHOR;
    snackProps.anchorOrigin.vertical = verticalAlign;
  }

  if (horizontalAlign) {
    if (!snackProps.anchorOrigin) snackProps.anchorOrigin = DEFAULT_ANCHOR;
    snackProps.anchorOrigin.horizontal = horizontalAlign;
  }

  if (action) {
    const ActionElem: FC<IClickable> = ({ onClick }: IClickable) => (
      <DefaultActionButton label={action} onClick={onClick} />
    );

    ActionElem.propTypes = {
      onClick: PropTypes.func.isRequired,
    };

    const ActionButton = typeof action === 'string'
      // eslint-disable-next-line react/prop-types
      ? ActionElem
      : (action as FC);

    if (!contentProps.action) contentProps.action = [];
    contentProps.action.push(<ActionButton key={2} onClick={onAction} />);
  }

  if (closer) {
    const CloseButton: FC<IClickable> = closer
      ? (closer as FC<IClickable>)
      : DefaultCloseButton;

    if (!contentProps.action) contentProps.action = [];
    contentProps.action.push(
      onClose
        ? <CloseButton key={1} onClick={onClose} />
        : <CloseButton key={1} onClick={emptyFn} />,
    );
  }

  return (
    <Snackbar {...snackProps}>
      <SnackbarContent {...contentProps} />
    </Snackbar>
  );
};

TMCSnackbar.defaultProps = DEFAULT_SNACKBAR_PROPS;

TMCSnackbar.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  variant: PropTypes.oneOf([
    'success',
    'warning',
    'error',
    'info',
  ]),
  timeout: PropTypes.number,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  closer: PropTypes.element,
  verticalAlign: PropTypes.oneOf([
    'top',
    'bottom',
  ]),
  horizontalAlign: PropTypes.oneOf([
    'left',
    'right',
    'center',
  ]),
  onAction: PropTypes.func,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default TMCSnackbar;
