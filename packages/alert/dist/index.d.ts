/**
 * index.tsx
 *
 * @description UIAlert for notifying the user of important information.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2020
 */
import React, { SyntheticEvent, ReactNode } from 'react';
import PropTypes from 'prop-types';
declare type ClickProps = {
    onClick: (evt: SyntheticEvent) => void;
};
declare type AlertProps = {
    title: string;
    children: ReactNode;
    className?: string;
    timeout?: number;
    onConfirm?: (evt: SyntheticEvent) => void;
    Confirmer?: React.FunctionComponent<ClickProps>;
    Closer?: React.FunctionComponent<ClickProps>;
    onClose?: () => void;
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
export declare const Alert: {
    ({ children, title, timeout, onConfirm, Confirmer, className, onClose, Closer, }: AlertProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        title: PropTypes.Validator<string>;
        timeout: PropTypes.Requireable<number>;
        onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        Confirmer: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        onClose: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        Closer: PropTypes.Requireable<string>;
    };
};
export default Alert;
