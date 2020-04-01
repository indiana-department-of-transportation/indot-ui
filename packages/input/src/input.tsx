import React, { useState } from 'react';

import {
  identity,
  echo,
  FormControlEvent
} from '@jasmith79/ts-utils';

export interface IValidatingInputParams {
  value: string,
  isError?: boolean, 
  onBlur: (evt: FormControlEvent) => void,
  onChange: (evt: FormControlEvent) => void,
  name: string,
}

export interface IInputRenderFn {
  (props: IValidatingInputParams): React.ReactElement
}

export interface IValidatingInputProps<T> {
  value: T,
  setValue: (value: T | null) => void,
  children?: React.ReactChild | IInputRenderFn,
  render?: (props: IValidatingInputParams) => React.ReactElement,
  component?: React.ComponentType<IValidatingInputParams>,
  name?: string,
  parse?: (input: string | null) => T | null,
  format?: (value: T | null) => string,
  onError?: (err: Error) => void,
}

// This will catch any non-primitive.
const GENERIC_OBJ_REGEX = /^\[object \w+\]$/i;

const defaultFormat = (value: any) => {
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

const extractEventValue = (evt: FormControlEvent) => {
  return evt && evt.target
    ? evt.target.value
    : evt && evt.currentTarget
      ? evt.currentTarget.value
      : null;
};

export const ValidatingInput = <T,>({
  children,
  render,
  component,
  name,
  parse = echo,
  format = defaultFormat,
  onError = identity,
  value,
  setValue,
}: IValidatingInputProps<T>): React.ReactElement | null => {
  const [localState, updateLocalState] = useState(format(value));
  const [errorState, updateErrorState] = useState();
  const onBlur = (evt: FormControlEvent) => {
    const value = extractEventValue(evt);
    try {
      const parsed = parse(value);
      const display = format(parsed);
      updateLocalState(display);
      setValue(parsed);
      updateErrorState(undefined);
    } catch (err) {
      updateErrorState(err);
      onError(err);
    }
  };

  const onChange = (evt: FormControlEvent) => {
    const value = extractEventValue(evt);
    try {
      const parsed = parse(value);
      const display = format(parsed);
      updateLocalState(display);
      setValue(parsed);
      updateErrorState(undefined);
    } catch (err) {
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
    ? () => { const Component = component; return <Component {...params} />; }
    : render
      ? render
      : typeof children === 'function'
        ? children
        : null;

  // const Component = component;
  // const renderTarget = render || Component || children;

  if (typeof renderTarget === 'function') {
    return renderTarget(params);
  } else {
    throw new Error('No renderable for Validating input.');
  }
};

const Test = () => (
  <ValidatingInput
    value={3}
    setValue={(value: number | null) => console.log(`Called ${value}`)}
>{
  (_props: IValidatingInputParams) => <input />
}</ValidatingInput>
);

export default ValidatingInput;
