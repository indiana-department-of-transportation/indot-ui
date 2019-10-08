"use strict";
/**
 * TMCError.tsx
 *
 * @description Error header for the ITS Ticketing project.
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
const tmclogger_1 = __importDefault(require("@indot/tmclogger"));
const defaultErrorMessage = 'An error has occured please reload.';
/**
 * @description Error page for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {Error} props.error The error that caused the error page render.
 * @param {string} props.message The message to display on the error page.
 * @returns {React.FunctionComponent} The Error component.
 */
exports.TMCError = ({ error = new Error(defaultErrorMessage), message = defaultErrorMessage, }) => {
    tmclogger_1.default.error(error);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null, "Error!"),
        react_1.default.createElement("p", null, message)));
};
exports.TMCError.defaultProps = {
    error: new Error(defaultErrorMessage),
    message: defaultErrorMessage,
};
exports.TMCError.propTypes = {
    error: prop_types_1.default.instanceOf(Error),
    message: prop_types_1.default.string,
};
exports.default = exports.TMCError;
//# sourceMappingURL=TMCError.js.map