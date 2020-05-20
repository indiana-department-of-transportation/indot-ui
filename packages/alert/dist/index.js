"use strict";
/**
 * index.tsx
 *
 * @description UIAlert for notifying the user of important information.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2020
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ts_utils_1 = require("@jasmith79/ts-utils");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
const DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
const DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
const DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
const DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
/**
 * @description Default alert close button.
 *
 * @param [props] The destructured React props.
 * @param prop.onClick The click event handler.
 * @returns Close button element.
 */
const DEFAULT_CLOSER = ({ onClick, }) => (react_1.default.createElement(Button_1.default, { onClick: onClick, color: "primary", variant: "contained" }, "Got it"));
DEFAULT_CLOSER.propTypes = {
    onClick: prop_types_1.default.func.isRequired,
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
exports.Alert = ({ children, title, timeout, onConfirm, Confirmer, className = '', onClose = ts_utils_1.emptyFn, Closer = DEFAULT_CLOSER, }) => {
    if (Confirmer && !onConfirm) {
        throw new Error('Confirm component provided to TMCAlert but no callback for confirmation!');
    }
    const [isOpen, setOpen] = react_1.useState(false);
    const [timeoutHandle, setHandle] = react_1.useState(setTimeout(() => { }, 0));
    const handleClose = react_1.useCallback((evt) => {
        setOpen(false);
        onClose();
    }, [setOpen]);
    // Reopen if we've got new children to render.
    react_1.useEffect(() => {
        if (children)
            setOpen(true);
    }, [children, setOpen]);
    // Set the timeout if it exists
    react_1.useEffect(() => {
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
    return react_1.default.createElement(Dialog_1.default, { onClose: handleClose, open: isOpen, className: className },
        react_1.default.createElement(DialogTitle_1.default, { id: "alert-dialog-title" }, title),
        react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(DialogContentText_1.default, { id: "alert-dialog-description" }, children)),
        react_1.default.createElement(DialogActions_1.default, null,
            Confirmer && onConfirm && react_1.default.createElement(Confirmer, { onClick: onConfirm }),
            react_1.default.createElement(Closer, { onClick: handleClose })));
};
exports.Alert.propTypes = {
    children: prop_types_1.default.node.isRequired,
    title: prop_types_1.default.string.isRequired,
    timeout: prop_types_1.default.number,
    onConfirm: prop_types_1.default.func,
    Confirmer: prop_types_1.default.node,
    className: prop_types_1.default.string,
    onClose: prop_types_1.default.node,
    Closer: prop_types_1.default.string,
};
exports.default = exports.Alert;
//# sourceMappingURL=index.js.map