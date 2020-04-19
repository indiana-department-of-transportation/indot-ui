import {
  useState,
  useCallback,
  useEffect,
  SyntheticEvent
} from 'react';

import {
  identity,
  echo,
} from '@jasmith79/ts-utils';

import {
  useRenderProps,
  RenderProps,
  extractSyntheticEventValue,
} from '@jasmith79/react-utils';

export type ValidatingInputProps<T> = {
  value: T,
  setValue: (value: T) => void,
  parse?: (input: string) => T,
  format?: (value: T) => string,
  onError?: (err: Error) => void,
  name?: string,
};

export type ValidatingInputParams = {
  value: string,
  isError?: boolean,
  onBlur: (evt: SyntheticEvent) => void,
  onChange: (evt: SyntheticEvent) => void,
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

export const useValidatingInput = <T,>({
  value,
  setValue,
  parse = echo,
  format = defaultFormat,
  onError = identity,
  name = '',
}: ValidatingInputProps<T>) => {
  const [localState, updateLocalState] = useState(format(value));
  const [errorState, updateErrorState] = useState();
  useEffect(() => {
    const externalValue = format(value);
    if (externalValue !== localState) {
      updateLocalState(externalValue);
    }
  }, [value]);

  const onBlur = useCallback((evt: SyntheticEvent) => {
    const value = extractSyntheticEventValue(evt);
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
  }, []);

  const onChange = useCallback((evt: SyntheticEvent) => {
    const value = extractSyntheticEventValue(evt);
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

