"use strict";
/**
 * drawer.tsx
 *
 * @description Responsive side drawer.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2020
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const clsx_1 = __importDefault(require("clsx"));
const Hidden_1 = __importDefault(require("@material-ui/core/Hidden"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
const Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
const styles_1 = require("@material-ui/core/styles");
/**
 * @description Style hook for ResponsiveDrawer component.
 *
 * @param width The drawer width.
 * @returns React Hook for the ResponsiveDrawer styles.
 */
exports.useResponsiveDrawerStyles = (width) => (styles_1.makeStyles((theme) => {
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
exports.ResponsiveDrawer = ({ open, setOpen, width = 320, className = '', children, }) => {
    const classes = exports.useResponsiveDrawerStyles(width);
    const close = (_evt) => setOpen(false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Hidden_1.default, { lgUp: true, implementation: 'css' },
            react_1.default.createElement(Drawer_1.default, { className: clsx_1.default(classes.drawer, className), anchor: "left", variant: "temporary", open: open, classes: {
                    paper: classes.drawerPaper,
                }, ModalProps: {
                    onBackdropClick: close,
                } }, children)),
        react_1.default.createElement(Hidden_1.default, { mdDown: true, implementation: 'css' },
            react_1.default.createElement(Drawer_1.default, { className: clsx_1.default(classes.drawer, className), anchor: "left", variant: "permanent", open: true, classes: {
                    paper: classes.drawerPaper,
                } }, children))));
};
exports.ResponsiveDrawer.propTypes = {
    open: prop_types_1.default.bool.isRequired,
    setOpen: prop_types_1.default.func.isRequired,
    width: prop_types_1.default.number,
    className: prop_types_1.default.string,
    children: prop_types_1.default.node.isRequired,
};
/**
 * @description Custom React Hook for using a responsive side drawer.
 *
 * @param [params] The destructured parameters.
 * @param params.width Width of the drawer, in pixels. Defaults to 320.
 * @returns Drawer component, MenuButton component, Main component, and a
 * state hook for using/setting the open state of the drawer.
 */
exports.useResponsiveDrawer = ({ width = 320, } = {}) => {
    const classes = exports.useResponsiveDrawerStyles(width);
    const [open, setOpen] = react_1.default.useState(false);
    const Drawer = react_1.default.useMemo(() => {
        const Drawer = ({ children, className = '', }) => (react_1.default.createElement(exports.ResponsiveDrawer, { open: open, setOpen: setOpen, width: width, className: className }, children));
        Drawer.propTypes = {
            children: prop_types_1.default.node.isRequired,
            className: prop_types_1.default.string,
        };
        return Drawer;
    }, [open, setOpen, width]);
    const MenuButton = react_1.default.useMemo(() => {
        const MenuButton = ({ className = '' }) => (react_1.default.createElement(IconButton_1.default, { color: "inherit", "aria-label": "open drawer", edge: "end", onClick: () => setOpen(true), className: clsx_1.default(classes.menuButton, className) },
            react_1.default.createElement(Menu_1.default, null)));
        MenuButton.propTypes = {
            className: prop_types_1.default.string,
        };
        return MenuButton;
    }, [classes.menuButton, setOpen]);
    const Main = react_1.default.useMemo(() => {
        const Main = ({ children, className = '', }) => {
            return (react_1.default.createElement("main", { className: clsx_1.default(classes.mainContainer, className) }, children));
        };
        Main.propTypes = {
            children: prop_types_1.default.node.isRequired,
            className: prop_types_1.default.string,
        };
        return Main;
    }, [classes.mainContainer]);
    const useResponsiveDrawerState = react_1.default.useMemo(() => {
        return () => [open, setOpen];
    }, [open, setOpen]);
    return {
        Main,
        Drawer,
        MenuButton,
        useResponsiveDrawerState,
    };
};
//# sourceMappingURL=drawer.js.map