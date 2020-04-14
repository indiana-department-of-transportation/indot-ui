/// <reference types="react" />
import { FormControlEvent } from '@jasmith79/ts-utils';
import { RenderProps } from '@jasmith79/react-utils';
export declare type ValidatingInputProps<T> = {
    value: T;
    setValue: (value: T | null) => void;
    parse?: (input: string | null) => T | null;
    format?: (value: T | null) => string;
    onError?: (err: Error) => void;
    name?: string;
};
export declare type ValidatingInputParams = {
    value: string;
    isError?: boolean;
    onBlur: (evt: FormControlEvent) => void;
    onChange: (evt: FormControlEvent) => void;
    name: string;
};
export declare const ValidatingInput: <T>(props: ValidatingInputProps<T> & RenderProps<ValidatingInputParams>) => JSX.Element | null;
export default ValidatingInput;
