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
import { SyntheticEvent } from 'react';
import { HTMLFormControl } from '@jasmith79/ts-utils';
import { RenderProps } from '@jasmith79/react-utils';
export declare type ParseFn<T> = {
    (input: string): T;
    (input: string[]): T[];
    (input: T): T;
};
export declare type ValidatingInputProps<T> = {
    value: T;
    setValue: (value: T) => void;
    parse?: ParseFn<T>;
    format?: (value: T) => string;
    onError?: (err: Error) => void;
    name?: string;
};
export declare type ValidatingInputParams = {
    value: string;
    isError?: boolean;
    onBlur: (evt: SyntheticEvent<HTMLFormControl>) => void;
    onChange: (evt: SyntheticEvent<HTMLFormControl>) => void;
    name: string;
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
export declare const useValidatingInput: <T>({ value, setValue, parse, format, onError, name, }: ValidatingInputProps<T>) => {
    value: string;
    isError: boolean;
    onBlur: (evt: SyntheticEvent<HTMLFormControl, Event>) => void;
    onChange: (evt: SyntheticEvent<HTMLFormControl, Event>) => void;
    name: string;
};
/**
 * @description A headless component that validates an underlying form control.
 *
 * @param props The React Props.
 * @returns A headless ValidatingInput component.
 */
export declare const ValidatingInput: <T>(props: ValidatingInputProps<T> & RenderProps<ValidatingInputParams>) => JSX.Element;
export default ValidatingInput;
