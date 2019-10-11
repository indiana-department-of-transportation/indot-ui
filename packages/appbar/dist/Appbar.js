"use strict";
/**
 * appbar.tsx
 *
 * @description AppBar header for the ITS Ticketing project.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_router_dom_1 = require("react-router-dom");
const ts_utils_1 = require("@jasmith79/ts-utils");
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const account_1 = __importDefault(require("@indot/account"));
const material_theme_1 = __importDefault(require("@indot/material-theme"));
const INDOTLogo = __importStar(require("../img/indot.png"));
/**
 * @description A simple app bar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
exports.TMCAppbar = ({ title, Searchbar, }) => (react_1.default.createElement(AppBar_1.default, null,
    react_1.default.createElement(Toolbar_1.default, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("img", { src: String(INDOTLogo), alt: "INDOT logo", style: { width: '48px', height: '48px' } })),
        react_1.default.createElement(Typography_1.default, { variant: "h6", style: { marginLeft: material_theme_1.default.spacing(2) } }, title),
        Searchbar)));
exports.TMCAppbar.defaultProps = {
    Searchbar: undefined,
};
exports.TMCAppbar.propTypes = {
    title: prop_types_1.default.string.isRequired,
    Searchbar: prop_types_1.default.node,
};
/**
 * @description An app bar for TMC Applications with login and account management.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @param {Object} props.user The logged in user.
 * @param {Function} props.logoff The logoff function.
 * @param {React.Component} props.Account An optional account management component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
exports.TMCUserAppbar = ({ title, Searchbar, user = { userName: '' }, logoff = ts_utils_1.emptyFn, Account = react_1.default.createElement(account_1.default, { userName: user.userName, logoff: logoff }), }) => (react_1.default.createElement(AppBar_1.default, null,
    react_1.default.createElement(Toolbar_1.default, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("img", { src: INDOTLogo, alt: "INDOT logo", style: { width: '48px', height: '48px' } })),
        react_1.default.createElement(Typography_1.default, { variant: "h6", style: { marginLeft: material_theme_1.default.spacing(2) } }, title),
        Searchbar,
        react_1.default.createElement("div", { style: {
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'flex-end',
                flexGrow: 4,
            } }, Account))));
exports.TMCUserAppbar.defaultProps = {
    user: { userName: '' },
    logoff: ts_utils_1.emptyFn,
    Account: react_1.default.createElement(account_1.default, { userName: '', logoff: ts_utils_1.emptyFn }),
};
exports.TMCUserAppbar.propTypes = {
    title: prop_types_1.default.string.isRequired,
    Searchbar: prop_types_1.default.node,
    user: prop_types_1.default.shape({
        userName: prop_types_1.default.string,
    }),
    logoff: prop_types_1.default.func,
    Account: prop_types_1.default.node,
};
exports.default = exports.TMCAppbar;
//# sourceMappingURL=Appbar.js.map