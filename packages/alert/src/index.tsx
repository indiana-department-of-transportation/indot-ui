/**
 * index.tsx
 *
 * @description UIAlert for notifying the user of important information.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2020
 */

import React, {
  useCallback,
  useEffect,
  useState,
  SyntheticEvent,
  ReactNode,
} from 'react';
import PropTypes from 'prop-types';

import {
  emptyFn,
  TimeoutHandle,
} from '@jasmith79/ts-utils';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

type ClickProps = {
  onClick: (evt: SyntheticEvent) => void,
};

type AlertProps = {
  title: string,
  children: ReactNode,
  className?: string,
  timeout?: number,
  onConfirm?: (evt: SyntheticEvent) => void,
  Confirmer?: React.FunctionComponent<ClickProps>,
  Closer?: React.FunctionComponent<ClickProps>,
  onClose?: () => void,
};

/**
 * @description Default alert close button.
 *
 * @param [props] The destructured React props.
 * @param prop.onClick The click event handler.
 * @returns Close button element.
 */
const DEFAULT_CLOSER: React.FunctionComponent<ClickProps> = ({
  onClick,
}) => (
  <Button
    onClick={onClick}
    color="primary"
    variant="contained"
  >
    Got it
  </Button>
);

DEFAULT_CLOSER.propTypes = {
  onClick: PropTypes.func.isRequired,
};

/**
 * @description A UIAlert for notifying the user of important information.
 *
 * @param [props] The destructured React props.
 * @param props.className CSS classes for the component.
 * @param props.title The dialog title.
 * @param props.children The React children, should be the contents of the alert dialog.
 * @param props.timeout Optional timeout for automatic closing.
 * @param props.onConfirm Callback for user confirmation.
 * @param props.Confirmer Confirmation button.
 * @param props.onClose Optional callback to run on dialog close.
 * @param props.Closer Optional override for the default closer.
 * @returns The Alert component.
 */
export const Alert = ({
  children,
  title,
  timeout,
  onConfirm,
  Confirmer,
  className = '',
  onClose = emptyFn,
  Closer = DEFAULT_CLOSER,
}: AlertProps) => {
  if (Confirmer && !onConfirm) {
    throw new Error('Confirm component provided to TMCAlert but no callback for confirmation!');
  }

  const [isOpen, setOpen] = useState(false);
  const [timeoutHandle, setHandle] = useState<TimeoutHandle | null>(
    setTimeout(() => {}, 0),
  );

  const handleClose = useCallback((evt: SyntheticEvent) => {
    setOpen(false);
    onClose();
  }, [setOpen]);

  // Reopen if we've got new children to render.
  useEffect(() => {
    if (children) setOpen(true);
  }, [children, setOpen]);

  // Set the timeout if it exists
  useEffect(() => {
    if (isOpen && timeout && !timeoutHandle) {
      setHandle(setTimeout(() => {
        setOpen(false);
        setHandle(null);
      }, timeout));
    }

    // If user already closed the dialog
    if (timeoutHandle && !isOpen) {
      clearTimeout(timeoutHandle);
      setHandle(null);
    }
  }, [isOpen, timeout, timeoutHandle, setOpen, setHandle]);

  return <Dialog
    onClose={handleClose}
    open={isOpen}
    className={className}
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {children}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      {Confirmer && onConfirm && <Confirmer onClick={onConfirm} />}
      <Closer onClick={handleClose} />
    </DialogActions>
  </Dialog>
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  timeout: PropTypes.number,
  onConfirm: PropTypes.func,
  Confirmer: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.node,
  Closer: PropTypes.string,
};

export default Alert;
