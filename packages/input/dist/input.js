"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * input.tsx
 *
 * @description Headless input component with validation. Built on prior work from
 * Steven Wittens.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2020
 */
const react_1 = require("react");
const ts_utils_1 = require("@jasmith79/ts-utils");
const react_utils_1 = require("@jasmith79/react-utils");
// This will catch any non-primitive.
const GENERIC_OBJ_REGEX = /^\[object \w+\]$/i;
/**
 * @description Default formatter for the ValidatingInput component.
 *
 * @param value Value from the underlying input component.
 * @returns Stringified version of the value.
 */
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
/**
 * @description React Hook for using the validation and error handling.
 *
 * @param [params] The destructured parameter objject.
 * @param params.value The initial value for the input.
 * @param params.setValue The setter to relay the value back out on successful parse.
 * @param params.parse The parser for validating a value. Defaults to Identity.
 * @param params.format The formatter for displaying value to the user. Defaults to toString.
 * @param params.onError Error handler for asynchronous errors.
 * @param params.name HTMLFormControl name attribute. Defaults to the setValue.name.
 * @returns Object with properties:
 * * value: Current internal value.
 * * isError: Whether or not the input is in an error state.
 * * onBlur: Blur handler.
 * * onChange: Change handler.
 * * name: FormControl name attribute.
 */
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
        try {
            const parsed = parse(value);
            const display = format(parsed);
            updateLocalState(display);
            setValue(parsed);
            updateErrorState(undefined);
        }
        catch (err) {
            // NO-OP
        }
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
/**
 * @description A headless component that validates an underlying form control.
 *
 * @param props The React Props.
 * @returns A headless ValidatingInput component.
 */
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