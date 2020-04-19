"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ts_utils_1 = require("@jasmith79/ts-utils");
const react_utils_1 = require("@jasmith79/react-utils");
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
    return stringed;
};
exports.useValidatingInput = ({ value, setValue, parse = ts_utils_1.echo, format = defaultFormat, onError = ts_utils_1.identity, name = '', }) => {
    const [localState, updateLocalState] = react_1.useState(format(value));
    const [errorState, updateErrorState] = react_1.useState();
    react_1.useEffect(() => {
        const externalValue = format(value);
        if (externalValue !== localState) {
            updateLocalState(externalValue);
        }
    }, [value]);
    const onBlur = react_1.useCallback((evt) => {
        const value = react_utils_1.extractSyntheticEventValue(evt);
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
    }, []);
    const onChange = react_1.useCallback((evt) => {
        const value = react_utils_1.extractSyntheticEventValue(evt);
        updateLocalState(value);
    }, []);
    const formCtrlName = name || setValue.name;
    return {
        value: localState,
        isError: Boolean(errorState),
        onBlur,
        onChange,
        name: formCtrlName,
    };
};
exports.ValidatingInput = (props) => {
    const params = exports.useValidatingInput(props);
    const renderTarget = react_utils_1.useRenderProps(props);
    if (typeof renderTarget === 'function') {
        return renderTarget(params);
    }
    else {
        throw new Error('No renderable for Validating input.');
    }
};
exports.default = exports.ValidatingInput;
//# sourceMappingURL=input.js.map