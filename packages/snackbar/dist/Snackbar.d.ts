/**
 * TMCSnackbar.js
 *
 * @description Snackbar component for TMC React applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React, { MouseEvent as MEvt, SyntheticEvent, ReactNode, FC } from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
declare enum variants {
    success = "success",
    warning = "warning",
    error = "error",
    info = "info"
}
export interface ISnackbarProps {
    message: string | ReactNode;
    variant?: keyof typeof variants;
    timeout?: number;
    color?: 'primary' | 'secondary';
    action?: ReactNode;
    closer?: ReactNode;
    verticalAlign?: 'top' | 'bottom';
    horizontalAlign?: 'left' | 'right' | 'center';
    onAction?: (evt?: MEvt) => void;
    onClose?: (evt?: SyntheticEvent<any, Event>) => void;
    className?: string;
}
export declare const iconVariants: {
    [variants.success]: typeof CheckCircleIcon;
    [variants.warning]: typeof CheckCircleIcon;
    [variants.error]: typeof CheckCircleIcon;
    [variants.info]: typeof CheckCircleIcon;
};
/**
 * @description Default close button for the Snackbar. Can be overridden by passing a component
 * to the closer property of the constructor.
 *
 * @param {Object} [props] The destructured props.
 * @param {Function} props.onClick Optional click handler.
 * @returns {React.FunctionComponent} The default close button component.
 */
export declare const DefaultCloseButton: {
    ({ onClick, }: {
        onClick: (evt: React.MouseEvent<Element, MouseEvent>) => void;
    }): JSX.Element;
    propTypes: {
        onClick: PropTypes.Validator<(...args: any[]) => any>;
    };
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
export declare const DefaultActionButton: {
    ({ label, onClick, }: {
        label: React.ReactNode;
        onClick: (evt: React.MouseEvent<Element, MouseEvent>) => void;
    }): JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string>;
        onClick: PropTypes.Validator<(...args: any[]) => any>;
    };
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
export declare const TMCSnackbar: FC<ISnackbarProps>;
export default TMCSnackbar;
