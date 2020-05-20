"use strict";
/**
 * PageContent.js
 *
 * @description A container component for page content.
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
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const styles_1 = require("@material-ui/core/styles");
exports.usePageContentStyles = styles_1.makeStyles(theme => ({
    card: {
        minWidth: 275,
        width: '95%',
        height: '75vh',
        position: 'relative',
        top: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        overflowY: 'scroll',
    },
    title: {
        color: '#000',
        textAlign: 'center',
    },
    titleContainer: {
        borderBottom: '1px solid #000',
        marginBottom: theme.spacing(3),
        minWidth: '200px',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    scrollable: {
        overflowY: 'scroll',
    },
}));
/**
 * @description Page content container component.
 *
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The page title.
 * @param {React.ReactNode} props.children The child components.
 * @param {boolean} props.scrollable Whether the container is scrollable.
 * @returns {React.FunctionComponent} The container component.
 */
exports.PageContent = ({ title, children, scrollable = false, className = '', }) => {
    const classes = exports.usePageContentStyles();
    return (react_1.default.createElement(Card_1.default, { className: clsx_1.default(classes.card, className) },
        react_1.default.createElement(CardContent_1.default, null,
            react_1.default.createElement("div", { className: classes.titleContainer },
                react_1.default.createElement(Typography_1.default, { variant: "h6", className: classes.title, gutterBottom: true }, title)),
            react_1.default.createElement("div", { className: scrollable ? classes.scrollable : '' }, children))));
};
exports.PageContent.defaultProps = {
    scrollable: false,
};
exports.PageContent.propTypes = {
    title: prop_types_1.default.string.isRequired,
    children: prop_types_1.default.node.isRequired,
    scrollable: prop_types_1.default.bool,
};
exports.default = exports.PageContent;
//# sourceMappingURL=PageContent.js.map