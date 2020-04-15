import React, { useState } from 'react';

import {
  identity,
  echo,
  FormControlEvent
} from '@jasmith79/ts-utils';

import {
  useRenderProps,
  RenderProps,
} from '@jasmith79/react-utils';

export type ValidatingInputProps<T> = {
  value: T,
  setValue: (value: T | null) => void,
  parse?: (input: string | null) => T | null,
  format?: (value: T | null) => string,
  onError?: (err: Error) => void,
  name?: string,
};

export type ValidatingInputParams = {
  value: string,
  isError?: boolean,
  onBlur: (evt: FormControlEvent) => void,
  onChange: (evt: FormControlEvent) => void,
  name: string,
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

  return stringed;
};

const extractEventValue = (evt: FormControlEvent) => {
  return evt && evt.target
    ? evt.target.value
    : evt && evt.currentTarget
      ? evt.currentTarget.value
      : null;
};

const useValidatingInput = <T,>({
  value,
  setValue,
  parse = echo,
  format = defaultFormat,
  onError = identity,
  name = '',
  ...rest
}: ValidatingInputProps<T>) => {
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
  return {
    value: localState,
    isError: errorState,
    onBlur,
    onChange,
    name: formCtrlName,
  };
};

export const ValidatingInput = <T,>(
  props: ValidatingInputProps<T> & RenderProps<ValidatingInputParams>,
) => {
  const params = useValidatingInput(props);
  const renderTarget = useRenderProps(props);
  if (typeof renderTarget === 'function') {
    return renderTarget(params);
  } else {
    throw new Error('No renderable for Validating input.');
  }
};

export default ValidatingInput;
