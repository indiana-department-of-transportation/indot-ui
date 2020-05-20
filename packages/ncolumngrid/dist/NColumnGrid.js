"use strict";
/**
 * NColumnGrid.tsx
 *
 * @description Arranges items in a responsive, 1, 2, or 3 column grid.
 *
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
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const styles_1 = require("@material-ui/core/styles");
exports.useNColumnStyles = styles_1.makeStyles(() => ({
    root: {
        width: '100%',
    },
}));
/**
 * @description Lays the passed-in array of components out in a n-column
 * responsive grid.
 *
 * @param {Object} [props] The props object.
 * @param {Array} props.items The items to render in a 1, 2, or 3 responsive column grid.
 * @param {number} props.columns The number of columns for the layout.
 * @returns {React.Component} The layout component.
 */
exports.NColumnGrid = ({ children, items = [], columns = 3, className = '', }) => {
    const classes = exports.useNColumnStyles();
    const toRender = children
        ? react_1.default.Children.map(children, (child, i) => {
            var _a;
            const index = ((_a = child) === null || _a === void 0 ? void 0 : _a.id) ? child.id : i;
            return react_1.default.createElement(Grid_1.default, { item: true, xs: 12, lg: (12 / columns), key: index }, child);
        }) : items.map((Item, i) => {
        var _a;
        const index = ((_a = Item) === null || _a === void 0 ? void 0 : _a.id) ? Item.id : i;
        return react_1.default.createElement(Grid_1.default, { item: true, xs: 12, lg: (12 / columns), key: index }, Item);
    });
    return (react_1.default.createElement(Grid_1.default, { container: true, justify: "center", alignItems: "center", spacing: 1, className: clsx_1.default(classes.root, className) }, toRender));
};
exports.NColumnGrid.defaultProps = {
    items: undefined,
    columns: 3,
};
exports.NColumnGrid.propTypes = {
    items: prop_types_1.default.arrayOf(prop_types_1.default.element),
    columns: prop_types_1.default.oneOf([1, 2, 3]),
};
exports.default = exports.NColumnGrid;
//# sourceMappingURL=NColumnGrid.js.map