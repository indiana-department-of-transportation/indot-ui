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
const react_router_dom_1 = require("react-router-dom");
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const styles_1 = require("@material-ui/core/styles");
const indot_logo_1 = __importDefault(require("./indot-logo"));
/**
 * @description Logo component for the Appbar, links to homepage.
 */
exports.AppbarLogo = () => (react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
    react_1.default.createElement("img", { src: `data:image/png;base64, ${indot_logo_1.default}`, alt: "INDOT logo", style: { width: '48px', height: '48px' } })));
/**
 * @descrpition Title component for the Appbar.
 *
 * @param [props] Destructured React Props.
 * @param props.title The Appbar Title.
 * @returns The Appbar component.
 */
exports.AppbarTitle = ({ title }) => {
    const theme = styles_1.useTheme();
    return (react_1.default.createElement(Typography_1.default, { variant: "h6", style: { marginLeft: theme.spacing(2) } }, title));
};
exports.AppbarTitle.propTypes = {
    title: prop_types_1.default.string.isRequired,
};
/**
 * @description A Base component for TMC Appbars.
 *
 * @param [props] The destructured React props.
 * @param props.className CSS classes for the component.
 * @param props.ToolBarProps Props for the toolbar component.
 * @param props.children The React children.
 * @returns The AppbarBase component.
 */
exports.AppbarBase = ({ className = '', ToolBarProps = {}, children, }) => {
    return (react_1.default.createElement(AppBar_1.default, { className: className },
        react_1.default.createElement(Toolbar_1.default, Object.assign({}, ToolBarProps), children)));
};
exports.AppbarBase.propTypes = {
    className: prop_types_1.default.string,
    ToolBarProps: prop_types_1.default.object,
    children: prop_types_1.default.node,
};
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
exports.TMCAppbar = ({ title, className, ToolBarProps, children }) => (react_1.default.createElement(exports.AppbarBase, { className: className, ToolBarProps: ToolBarProps },
    react_1.default.createElement(exports.AppbarLogo, null),
    react_1.default.createElement(exports.AppbarTitle, { title: title }),
    children));
exports.TMCAppbar.propTypes = {
    title: prop_types_1.default.string.isRequired,
    ...exports.AppbarBase.propTypes,
};
exports.default = exports.TMCAppbar;
//# sourceMappingURL=Appbar.js.map