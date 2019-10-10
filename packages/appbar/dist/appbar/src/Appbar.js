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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const react_router_dom_1 = require("react-router-dom");
const theme_1 = __importDefault(require("../../indot-material-theme/src/theme"));
// @ts-ignore
const indot_png_1 = __importDefault(require("../img/indot.png"));
/**
 * @description App bar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @param {React.Component} props.Account An optional account management component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
exports.TMCAppBar = ({ title, Searchbar, Account }) => (react_1.default.createElement(AppBar_1.default, null,
    react_1.default.createElement(Toolbar_1.default, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("img", { src: indot_png_1.default, alt: "INDOT logo", style: { width: '48px', height: '48px' } })),
        react_1.default.createElement(Typography_1.default, { variant: "h6", style: { marginLeft: theme_1.default.spacing(2) } }, title),
        Searchbar,
        react_1.default.createElement("div", { style: {
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'flex-end',
                flexGrow: 4,
            } }, Account))));
exports.TMCAppBar.defaultProps = {
    Searchbar: null,
    Account: null,
};
exports.TMCAppBar.propTypes = {
    title: prop_types_1.default.string.isRequired,
    Searchbar: prop_types_1.default.element,
    Account: prop_types_1.default.element,
};
exports.default = exports.TMCAppBar;
//# sourceMappingURL=Appbar.js.map