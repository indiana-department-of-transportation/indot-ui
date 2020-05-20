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
export declare type ResponsiveDrawerProps = {
    open: boolean;
    setOpen: (x: boolean) => void;
    width?: number;
    className?: string;
    children: React.ReactNode;
};
/**
 * @description Style hook for ResponsiveDrawer component.
 *
 * @param width The drawer width.
 * @returns React Hook for the ResponsiveDrawer styles.
 */
export declare const useResponsiveDrawerStyles: (width: number) => Record<"drawer" | "drawerPaper" | "mainContainer" | "menuButton", string>;
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
export declare const ResponsiveDrawer: React.FunctionComponent<ResponsiveDrawerProps>;
/**
 * @description Custom React Hook for using a responsive side drawer.
 *
 * @param [params] The destructured parameters.
 * @param params.width Width of the drawer, in pixels. Defaults to 320.
 * @returns Drawer component, MenuButton component, Main component, and a
 * state hook for using/setting the open state of the drawer.
 */
export declare const useResponsiveDrawer: ({ width, }?: {
    width?: number | undefined;
}) => {
    Main: React.FunctionComponent<{
        className?: string | undefined;
        children: React.ReactNode;
    }>;
    Drawer: React.FunctionComponent<{
        className?: string | undefined;
        children: React.ReactNode;
    }>;
    MenuButton: React.FunctionComponent<{
        className?: string | undefined;
    }>;
    useResponsiveDrawerState: () => (boolean | React.Dispatch<React.SetStateAction<boolean>>)[];
};
