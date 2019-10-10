"use strict";
/**
 * Searchbar.tsx
 *
 * @description search bar for TMC react applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
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
const InputBase_1 = __importDefault(require("@material-ui/core/InputBase"));
const styles_1 = require("@material-ui/core/styles");
const colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
const Search_1 = __importDefault(require("@material-ui/icons/Search"));
const noop = (...args) => { };
const useStyles = styles_1.makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: colorManipulator_1.fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: colorManipulator_1.fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));
/**
 * @description Searchbar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.onSearch The function to be called when searching. Triggered by an enter
 * keypress in the search input or a click on the search icon.
 * @param {Function} props.onChange An optional onChange handler to e.g. Filter results while the
 * user is typing.
 * @param {string} props.placeholder Placeholder text for the search input. Defaults to 'Search...'.
 * @param {Any} ref The React DOM ref, needed because MUI Tooltip requires it.
 * @returns {React.FunctionComponent} The Searchbar component.
 */
exports.Searchbar = react_1.default.forwardRef(({ onSearch, onChange = noop, placeholder = 'Search…', }, ref) => {
    const classes = useStyles();
    const [currentValue, setValue] = react_1.useState('');
    const onKeyPress = (evt) => {
        if (evt.keyCode === 13 || (evt.key && evt.key === 'enter')) {
            onSearch(currentValue);
        }
    };
    const changeHandler = (evt) => {
        const val = evt.target ? evt.target.value : null;
        setValue(val || '');
        onChange(evt);
    };
    return (react_1.default.createElement("div", { className: classes.search },
        react_1.default.createElement("div", { className: classes.searchIcon },
            react_1.default.createElement(Search_1.default, { onClick: () => onSearch(currentValue) })),
        react_1.default.createElement(InputBase_1.default, { placeholder: placeholder, onChange: changeHandler, onKeyDown: onKeyPress, value: currentValue, classes: {
                root: classes.inputRoot,
                input: classes.inputInput,
            } })));
});
exports.Searchbar.defaultProps = {
    onChange: () => { },
    placeholder: 'Search…',
};
exports.Searchbar.propTypes = {
    onSearch: prop_types_1.default.func.isRequired,
    onChange: prop_types_1.default.func,
    placeholder: prop_types_1.default.string,
};
exports.default = exports.Searchbar;
//# sourceMappingURL=Searchbar.js.map