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
import {
  useState,
  useCallback,
  useEffect,
  SyntheticEvent
} from 'react';

import {
  identity,
  echo,
  HTMLFormControl,
} from '@jasmith79/ts-utils';

import {
  useRenderProps,
  RenderProps,
  extractSyntheticEventValue,
} from '@jasmith79/react-utils';

export type ParseFn<T> = {
  (input: string): T,
  (input: string[]): T[],
  (input: T): T,
}

export type ValidatingInputProps<T> = {
  value: T,
  setValue: (value: T) => void,
  parse?: ParseFn<T>,
  format?: (value: T) => string,
  onError?: (err: Error) => void,
  name?: string,
};

export type ValidatingInputParams = {
  value: string,
  isError?: boolean,
  onBlur: (evt: SyntheticEvent<HTMLFormControl>) => void,
  onChange: (evt: SyntheticEvent<HTMLFormControl>) => void,
  name: string,
}

// This will catch any non-primitive.
const GENERIC_OBJ_REGEX = /^\[object \w+\]$/i;

/**
 * @description Default formatter for the ValidatingInput component.
 * 
 * @param value Value from the underlying input component.
 * @returns Stringified version of the value.
 */
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

  const onBlur = useCallback((evt: SyntheticEvent<HTMLFormControl>) => {
    const value = extractSyntheticEventValue<T>(evt);
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

  const onChange = useCallback((evt: SyntheticEvent<HTMLFormControl>) => {
    const value = extractSyntheticEventValue<T>(evt);
    try {
      const parsed = parse(value);
      const display = format(parsed);
      updateLocalState(display);
      setValue(parsed);
      updateErrorState(undefined);
    } catch (err) {
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

