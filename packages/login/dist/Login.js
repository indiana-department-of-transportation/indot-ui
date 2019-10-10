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
const formik_1 = require("formik");
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const defaultFormState = {
    user_name: '',
    user_pass: '',
};
/**
 * @description Login form component.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.update Update function for the user state.
 * @returns {React.FunctionComponent} The login form component.
 */
exports.Login = ({ update, initialState, }) => {
    const [userFormState, setUserFormState] = react_1.useState(initialState || defaultFormState);
    /**
     * @description State managing event handler for the login form.
     * @param {string} name The property name to update in the state object.
     * @returns {Function} Event handler, side-effective.
     */
    const updateFormState = (name) => (evt) => setUserFormState({
        ...userFormState,
        [name]: evt.target.value,
    });
    // We'll use the form state instead of values
    const submitHandler = (_values, { setSubmitting, }) => {
        setSubmitting(true);
        const { user_name, user_pass } = userFormState;
        update(user_name, user_pass);
        setSubmitting(false);
    };
    return (react_1.default.createElement(formik_1.Formik, { initialValues: defaultFormState, onSubmit: submitHandler }, ({ isSubmitting }) => (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement(Grid_1.default, { container: true, direction: "column", alignContent: "center", justify: "center", spacing: 1 },
            react_1.default.createElement(Grid_1.default, { item: true },
                react_1.default.createElement(formik_1.Field, { component: TextField_1.default, name: "user_name", pattern: "^[a-zA-Z0-9]+@trafficwise\\.org$", label: "User Name", value: userFormState.user_name, onChange: updateFormState('user_name'), autoFocus: true })),
            react_1.default.createElement(Grid_1.default, { item: true },
                react_1.default.createElement(formik_1.Field, { component: TextField_1.default, name: "user_pass", type: "password", label: "Password", value: userFormState.user_pass, onChange: updateFormState('user_pass') })),
            react_1.default.createElement(Grid_1.default, { item: true },
                react_1.default.createElement(Button_1.default, { variant: "contained", disabled: isSubmitting, color: "primary", style: { position: 'relative', top: '25px' }, type: "submit" }, "Submit")))))));
};
exports.Login.propTypes = {
    update: prop_types_1.default.func.isRequired,
};
exports.default = exports.Login;
//# sourceMappingURL=Login.js.map