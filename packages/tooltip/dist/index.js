"use strict";
/**
 * index.tsx
 *
 * @description Wraps Material-UI tooltip components.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const clsx_1 = __importDefault(require("clsx"));
const Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const styles_1 = require("@material-ui/core/styles");
exports.useTooltipStyles = styles_1.makeStyles({
    title: {
        fontSize: '1.5em',
    },
});
/**
 * @description Title element for tooltips.
 *
 * @param [props] The destructured React props.
 * @param props.content The contents of the tooltip.
 * @returns The TooltipTitle component.
 */
exports.TooltipTitle = (props) => {
    const classes = exports.useTooltipStyles();
    const descendantProps = Object.assign({}, props);
    descendantProps.className = clsx_1.default(classes.title, descendantProps.className || '');
    return react_1.default.createElement("div", Object.assign({}, descendantProps), props.content);
};
exports.TooltipTitle.propTypes = {
    content: prop_types_1.default.node.isRequired,
};
/**
 * @description The TMC INDOT UI Tooltip component.
 *
 * @param [props] The destructured React props.
 * @param props.title The title for the tooltip. If simply a string, wrapped in a TooltipTitle.
 * @param props.children The React children to be displayed as the tooltip contents.
 * @returns The Tooltip component.
 */
exports.Tooltip = (_a) => {
    var { title, children } = _a, rest = __rest(_a, ["title", "children"]);
    const titleElem = typeof title === 'string'
        ? react_1.default.createElement(exports.TooltipTitle, { content: title })
        : title;
    const contentElem = typeof children === 'string'
        ? react_1.default.createElement(Button_1.default, null, children)
        : children;
    return (react_1.default.createElement(Tooltip_1.default, Object.assign({}, rest, { title: titleElem }), contentElem));
};
exports.Tooltip.propTypes = {
    title: prop_types_1.default.oneOf([prop_types_1.default.string, prop_types_1.default.node]).isRequired,
    children: prop_types_1.default.node,
};
exports.default = exports.Tooltip;
//# sourceMappingURL=index.js.map