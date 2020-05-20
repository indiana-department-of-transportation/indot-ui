"use strict";
/**
 * TMCSnackbar.js
 *
 * @description Snackbar component for TMC React applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const clsx_1 = __importDefault(require("clsx"));
const Snackbar_1 = __importDefault(require("@material-ui/core/Snackbar"));
const SnackbarContent_1 = __importDefault(require("@material-ui/core/SnackbarContent"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const styles_1 = require("@material-ui/core/styles");
const colors_1 = require("@material-ui/core/colors");
const CheckCircle_1 = __importDefault(require("@material-ui/icons/CheckCircle"));
const Error_1 = __importDefault(require("@material-ui/icons/Error"));
const Info_1 = __importDefault(require("@material-ui/icons/Info"));
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const Warning_1 = __importDefault(require("@material-ui/icons/Warning"));
const ts_utils_1 = require("@jasmith79/ts-utils");
var variants;
(function (variants) {
    variants["success"] = "success";
    variants["warning"] = "warning";
    variants["error"] = "error";
    variants["info"] = "info";
})(variants || (variants = {}));
const DEFAULT_ANCHOR = {
    horizontal: 'left',
    vertical: 'top',
};
const DEFAULT_SNACKBAR_PROPS = {
    message: '',
    variant: undefined,
    color: 'primary',
    timeout: 5000,
    action: '',
    closer: undefined,
    verticalAlign: 'bottom',
    horizontalAlign: 'center',
    onAction: ts_utils_1.emptyFn,
    onClose: ts_utils_1.emptyFn,
    className: '',
};
exports.useSnackStyles = styles_1.makeStyles((theme) => ({
    primary: {
        backgroundColor: theme.palette.primary.main,
    },
    secondary: {
        backgroundColor: theme.palette.secondary.dark,
    },
    success: {
        backgroundColor: colors_1.green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: colors_1.amber[700],
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
exports.iconVariants = {
    [variants.success]: CheckCircle_1.default,
    [variants.warning]: Warning_1.default,
    [variants.error]: Error_1.default,
    [variants.info]: Info_1.default,
};
/**
 * @description Default close button for the Snackbar. Can be overridden by passing a component
 * to the closer property of the constructor.
 *
 * @param {Object} [props] The destructured props.
 * @param {Function} props.onClick Optional click handler.
 * @returns {React.FunctionComponent} The default close button component.
 */
exports.DefaultCloseButton = ({ onClick, }) => {
    const classes = exports.useSnackStyles();
    return (react_1.default.createElement(IconButton_1.default, { key: "close", "aria-label": "Close", color: "inherit", onClick: onClick },
        react_1.default.createElement(Close_1.default, { className: classes.icon })));
};
exports.DefaultCloseButton.propTypes = {
    onClick: prop_types_1.default.func.isRequired,
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
exports.DefaultActionButton = ({ label, onClick, }) => (react_1.default.createElement(Button_1.default, { key: "undo", color: "secondary", size: "small", onClick: onClick }, label));
exports.DefaultActionButton.propTypes = {
    label: prop_types_1.default.string.isRequired,
    onClick: prop_types_1.default.func.isRequired,
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
exports.TMCSnackbar = ({ message, variant, timeout = 5000, color = 'primary', action = null, closer = null, verticalAlign = 'bottom', horizontalAlign = window.matchMedia('(width > 600px)').matches
    ? 'center'
    : 'left', onAction = ts_utils_1.emptyFn, onClose = ts_utils_1.emptyFn, className = '', }) => {
    const classes = exports.useSnackStyles();
    const snackProps = {
        onClose,
        open: Boolean(message),
    };
    const contentProps = {
        message: react_1.default.createElement("span", { id: "snackbar-message", className: classes.message }, message),
    };
    if (className) {
        snackProps.className = className;
        contentProps.className = className;
    }
    if (color) {
        contentProps.className = clsx_1.default(className, classes[color]);
    }
    if (variant) {
        snackProps.className = clsx_1.default(className, classes[variant]);
        contentProps.className = clsx_1.default(className, classes[variant]);
        const Icon = exports.iconVariants[variant];
        if (Icon) {
            contentProps.message = (react_1.default.createElement("span", { id: "snackbar-message", className: clsx_1.default(classes.message, classes[variant]) },
                react_1.default.createElement(Icon, { className: clsx_1.default(classes.icon, classes.iconVariant, classes[variant]) }),
                message));
        }
    }
    if (timeout)
        snackProps.autoHideDuration = timeout;
    if (verticalAlign) {
        if (!snackProps.anchorOrigin)
            snackProps.anchorOrigin = DEFAULT_ANCHOR;
        snackProps.anchorOrigin.vertical = verticalAlign;
    }
    if (horizontalAlign) {
        if (!snackProps.anchorOrigin)
            snackProps.anchorOrigin = DEFAULT_ANCHOR;
        snackProps.anchorOrigin.horizontal = horizontalAlign;
    }
    if (action) {
        const ActionElem = ({ onClick }) => (react_1.default.createElement(exports.DefaultActionButton, { label: action, onClick: onClick }));
        ActionElem.propTypes = {
            onClick: prop_types_1.default.func.isRequired,
        };
        const ActionButton = typeof action === 'string'
            // eslint-disable-next-line react/prop-types
            ? ActionElem
            : action;
        if (!contentProps.action)
            contentProps.action = [];
        contentProps.action.push(react_1.default.createElement(ActionButton, { key: 2, onClick: onAction }));
    }
    if (closer) {
        const CloseButton = closer
            ? closer
            : exports.DefaultCloseButton;
        if (!contentProps.action)
            contentProps.action = [];
        contentProps.action.push(onClose
            ? react_1.default.createElement(CloseButton, { key: 1, onClick: onClose })
            : react_1.default.createElement(CloseButton, { key: 1, onClick: ts_utils_1.emptyFn }));
    }
    return (react_1.default.createElement(Snackbar_1.default, Object.assign({}, snackProps),
        react_1.default.createElement(SnackbarContent_1.default, Object.assign({}, contentProps))));
};
exports.TMCSnackbar.defaultProps = DEFAULT_SNACKBAR_PROPS;
exports.TMCSnackbar.propTypes = {
    message: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.element,
    ]).isRequired,
    variant: prop_types_1.default.oneOf([
        'success',
        'warning',
        'error',
        'info',
    ]),
    timeout: prop_types_1.default.number,
    color: prop_types_1.default.oneOf([
        'primary',
        'secondary',
    ]),
    action: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.element,
    ]),
    closer: prop_types_1.default.element,
    verticalAlign: prop_types_1.default.oneOf([
        'top',
        'bottom',
    ]),
    horizontalAlign: prop_types_1.default.oneOf([
        'left',
        'right',
        'center',
    ]),
    onAction: prop_types_1.default.func,
    onClose: prop_types_1.default.func,
    className: prop_types_1.default.string,
};
exports.default = exports.TMCSnackbar;
//# sourceMappingURL=Snackbar.js.map