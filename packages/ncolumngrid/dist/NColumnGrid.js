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
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const styles_1 = require("@material-ui/core/styles");
const useStyles = styles_1.makeStyles(() => ({
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
exports.NColumnGrid = ({ items, columns = 3 }) => {
    const classes = useStyles();
    return (react_1.default.createElement(Grid_1.default, { container: true, justify: "center", alignItems: "center", spacing: 1, className: classes.root }, 
    // No good way to do this.
    // eslint-disable-next-line react/no-array-index-key
    items.map((Item, i) => (react_1.default.createElement(Grid_1.default, { item: true, xs: 12, lg: (12 / columns), key: i }, Item)))));
};
exports.NColumnGrid.defaultProps = {
    columns: 3,
};
exports.NColumnGrid.propTypes = {
    items: prop_types_1.default.arrayOf(prop_types_1.default.element).isRequired,
    columns: prop_types_1.default.oneOf([1, 2, 3]),
};
exports.default = exports.NColumnGrid;
//# sourceMappingURL=NColumnGrid.js.map