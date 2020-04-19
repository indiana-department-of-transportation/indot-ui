import { SyntheticEvent } from 'react';
import { RenderProps } from '@jasmith79/react-utils';
export declare type ValidatingInputProps<T> = {
    value: T;
    setValue: (value: T) => void;
    parse?: (input: string) => T;
    format?: (value: T) => string;
    onError?: (err: Error) => void;
    name?: string;
};
export declare type ValidatingInputParams = {
    value: string;
    isError?: boolean;
    onBlur: (evt: SyntheticEvent) => void;
    onChange: (evt: SyntheticEvent) => void;
    name: string;
};
export declare const useValidatingInput: <T>({ value, setValue, parse, format, onError, name, }: ValidatingInputProps<T>) => {
    value: string;
    isError: boolean;
    onBlur: (evt: SyntheticEvent<Element, Event>) => void;
    onChange: (evt: SyntheticEvent<Element, Event>) => void;
    name: string;
};
export declare const ValidatingInput: <T>(props: ValidatingInputProps<T> & RenderProps<ValidatingInputParams>) => JSX.Element | null;
export default ValidatingInput;
