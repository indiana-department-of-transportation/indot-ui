import React from 'react';
import { FormControlEvent } from '@jasmith79/ts-utils';
export interface IValidatingInputParams {
    value: string;
    isError?: boolean;
    onBlur: (evt: FormControlEvent) => void;
    onChange: (evt: FormControlEvent) => void;
    name: string;
}
export interface IInputRenderFn {
    (props: IValidatingInputParams): React.ReactElement;
}
export interface IValidatingInputProps<T> {
    value: T;
    setValue: (value: T | null) => void;
    children?: React.ReactChild | IInputRenderFn;
    render?: (props: IValidatingInputParams) => React.ReactElement;
    component?: React.ComponentType<IValidatingInputParams>;
    name?: string;
    parse?: (input: string | null) => T | null;
    format?: (value: T | null) => string;
    onError?: (err: Error) => void;
}
export declare const ValidatingInput: <T>({ children, render, component, name, parse, format, onError, value, setValue, }: IValidatingInputProps<T>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
export default ValidatingInput;
