"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ts_utils_1 = require("@jasmith79/ts-utils");
// This will catch any non-primitive.
const GENERIC_OBJ_REGEX = /^\[object \w+\]$/i;
const defaultFormat = (value) => {
    if (value == null) {
        return '';
    }
    const stringed = '' + value;
    if (stringed.match(GENERIC_OBJ_REGEX)) {
        throw new Error('Object cannot be formatted for input value.');
    }
    console.log("STRINGED " + stringed);
    return stringed;
};
const extractEventValue = (evt) => {
    return evt && evt.target
        ? evt.target.value
        : evt && evt.currentTarget
            ? evt.currentTarget.value
            : null;
};
exports.ValidatingInput = ({ children, render, component, name, parse = ts_utils_1.echo, format = defaultFormat, onError = ts_utils_1.identity, value, setValue, }) => {
    const [localState, updateLocalState] = react_1.useState(format(value));
    const [errorState, updateErrorState] = react_1.useState();
    const onBlur = (evt) => {
        const value = extractEventValue(evt);
        try {
            const parsed = parse(value);
            const display = format(parsed);
            updateLocalState(display);
            setValue(parsed);
            updateErrorState(undefined);
        }
        catch (err) {
            updateErrorState(err);
            onError(err);
        }
    };
    const onChange = (evt) => {
        const value = extractEventValue(evt);
        try {
            const parsed = parse(value);
            const display = format(parsed);
            updateLocalState(display);
            setValue(parsed);
            updateErrorState(undefined);
        }
        catch (err) {
            onError(err);
        }
    };
    const formCtrlName = name || setValue.name;
    const params = {
        value: localState,
        isError: errorState,
        onBlur,
        onChange,
        name: formCtrlName,
    };
    const renderTarget = component
        ? () => { const Component = component; return react_1.default.createElement(Component, Object.assign({}, params)); }
        : render
            ? render
            : typeof children === 'function'
                ? children
                : null;
    // const Component = component;
    // const renderTarget = render || Component || children;
    if (typeof renderTarget === 'function') {
        return renderTarget(params);
    }
    else {
        throw new Error('No renderable for Validating input.');
    }
};
const Test = () => (react_1.default.createElement(exports.ValidatingInput, { value: 3, setValue: (value) => console.log(`Called ${value}`) }, (_props) => react_1.default.createElement("input", null)));
exports.default = exports.ValidatingInput;
//# sourceMappingURL=input.js.map