"use strict";
/**
 * Account.js
 *
 * @description Account icon and menu for TMC react applications.
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
const react_router_dom_1 = require("react-router-dom");
const Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
const Menu_1 = __importDefault(require("@material-ui/core/Menu"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const styles_1 = require("@material-ui/core/styles");
const AccountCircleOutlined_1 = __importDefault(require("@material-ui/icons/AccountCircleOutlined"));
const useStyles = styles_1.makeStyles(() => ({
    icon: {
        position: 'relative',
        width: '48px',
        height: '48px',
    },
}));
/**
 * @description An account management component.
 *
 * @param {Object} [props] The props object.
 * @param {Function} props.logoff Function to log the user off.
 * @returns {React.FunctionComponent} The account management component.
 */
exports.Account = ({ logoff, userName = '' }) => {
    const classes = useStyles();
    const [anchor, setAnchor] = react_1.useState();
    const [redirected, setRedirected] = react_1.useState(false);
    const logout = () => {
        logoff();
        setRedirected(true);
    };
    return (redirected
        ? react_1.default.createElement(react_router_dom_1.Redirect, { to: "/login" })
        : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Tooltip_1.default, { title: userName },
                react_1.default.createElement(AccountCircleOutlined_1.default, { className: classes.icon, "aria-haspopup": true, onClick: (evt) => setAnchor(evt.target) })),
            react_1.default.createElement(Menu_1.default, { open: Boolean(anchor), id: "acct-menu", onClose: () => setAnchor(null), anchorEl: anchor },
                react_1.default.createElement(MenuItem_1.default, { disabled: true }, userName),
                react_1.default.createElement(MenuItem_1.default, { onClick: logout, className: "logoff" }, "Log Off")))));
};
exports.Account.propTypes = {
    logoff: prop_types_1.default.func.isRequired,
};
exports.default = exports.Account;
//# sourceMappingURL=Account.js.map