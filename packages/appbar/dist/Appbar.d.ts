/**
 * appbar.tsx
 *
 * @description AppBar header for the ITS Ticketing project.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React, { ReactNode } from 'react';
import { ToolbarProps } from '@material-ui/core/Toolbar';
export declare type Titled = {
    title: string;
};
export declare type AppbarBaseProps = {
    className?: string;
    ToolBarProps?: ToolbarProps;
    children?: ReactNode;
};
export declare type TMCAppbarProps = AppbarBaseProps & Titled;
/**
 * @description Logo component for the Appbar, links to homepage.
 */
export declare const AppbarLogo: React.FunctionComponent;
/**
 * @descrpition Title component for the Appbar.
 *
 * @param [props] Destructured React Props.
 * @param props.title The Appbar Title.
 * @returns The Appbar component.
 */
export declare const AppbarTitle: React.FunctionComponent<Titled>;
/**
 * @description A Base component for TMC Appbars.
 *
 * @param [props] The destructured React props.
 * @param props.className CSS classes for the component.
 * @param props.ToolBarProps Props for the toolbar component.
 * @param props.children The React children.
 * @returns The AppbarBase component.
 */
export declare const AppbarBase: React.FunctionComponent<AppbarBaseProps>;
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
export declare const TMCAppbar: React.FunctionComponent<TMCAppbarProps>;
export default TMCAppbar;
