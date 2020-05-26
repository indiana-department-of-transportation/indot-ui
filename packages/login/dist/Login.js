"use strict";
/**
 * login.tsx
 *
 * @description Login component for TMC applications.
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
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const input_1 = __importDefault(require("@indot/input"));
const usetmcuser_1 = require("@indot/usetmcuser");
const state_hooks_1 = require("@indot/state-hooks");
const throwIfEmpty = (s) => {
    if (!s)
        throw new Error('Empty input!');
    return s;
};
/**
 * @description Login form component.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.update Update function for the user state.
 * @returns {React.FunctionComponent} The login form component.
 */
exports.Login = ({ login, className = '', }) => {
    const user = usetmcuser_1.useUser();
    const [userName, setUserName] = state_hooks_1.useLocalState('crashmap/user', user.user_name);
    const [userPass, setUserPass] = react_1.useState('');
    const handleSubmit = react_1.useCallback((evt) => {
        evt.preventDefault();
        login(userName, userPass);
    }, []);
    return (react_1.default.createElement("form", { onSubmit: handleSubmit, className: className },
        react_1.default.createElement(Grid_1.default, { container: true, direction: "column", alignContent: "center", justify: "center", spacing: 1 },
            react_1.default.createElement(Grid_1.default, { item: true },
                react_1.default.createElement(input_1.default, { value: userName, setValue: setUserName, 
                    // @ts-ignore
                    parse: throwIfEmpty }, ({ onBlur, onChange, value, name, }) => (react_1.default.createElement(TextField_1.default, { autoFocus: true, onChange: onChange, onBlur: onBlur, value: value, name: name, required: true, label: "Name" })))),
            react_1.default.createElement(Grid_1.default, { item: true },
                react_1.default.createElement(input_1.default, { value: userPass, setValue: setUserPass, 
                    // @ts-ignore
                    parse: throwIfEmpty }, ({ onBlur, onChange, value, name, }) => (react_1.default.createElement(TextField_1.default, { onChange: onChange, onBlur: onBlur, type: "password", value: value, name: name, required: true, label: "Password" })))),
            react_1.default.createElement(Grid_1.default, { item: true },
                react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", style: { position: 'relative', top: '25px' }, type: "submit" }, "Submit")))));
};
exports.Login.propTypes = {
    login: prop_types_1.default.func.isRequired,
};
exports.default = exports.Login;
//# sourceMappingURL=Login.js.map