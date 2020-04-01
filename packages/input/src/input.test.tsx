/**
 * input.test.tsx
 *
 * @description Tests for the ValidatingInput Component.
 *
 * @author jasmith79@gmail.com
 * @license MIT
 */

import 'jsdom-global/register';
import React from 'react';

import TextField from '@material-ui/core/TextField';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ValidatingInput, { IValidatingInputParams } from './input';

const timeout = (n: number) => new Promise(res => setTimeout(res, n));

describe('ValidatingInput', () => {
  it('should render without crashing', () => {
    shallow(
      <ValidatingInput value={3} setValue={(_x: number | null)=>{}}>
        {() => <div>Hi</div>}
      </ValidatingInput>
    );
    expect(true).toBe(true);
  });

  it('should work with TextField', async () => {
    const wrapper = mount(
      <ValidatingInput value={3} setValue={(_x: number | null) => { }}>{
        ({
          value,
          isError,
          onBlur,
          onChange,
          name,
        }) => <TextField value={value} onBlur={onBlur} onChange={onChange} error={isError} name={name} />
      }</ValidatingInput>
    );
    
    const textField = wrapper.find('input').instance();
    expect(textField).not.toBeNull();
  });

  it('should take a render method', () => {
    const render = ({
      value,
      isError,
      onBlur,
      onChange,
      name,
    }: IValidatingInputParams) => <TextField
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      error={isError}
      name={name}
    />;

    const wrapper = mount(
      <ValidatingInput 
        value={3} 
        setValue={(_x: number | null) => { }}
        render={render}
      />
    );

    const textField = wrapper.find('input').instance();
    expect(textField).not.toBeNull();
  });

  it('should take a component Prop', () => {
    const Component = ({
      value,
      isError,
      onBlur,
      onChange,
      name,
    }: IValidatingInputParams) => <TextField
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        error={isError}
        name={name}
      />;

    const wrapper = mount(
      <ValidatingInput
        value={3}
        setValue={(_x: number | null) => { }}
        component={Component}
      />
    );

    const textField = wrapper.find('input').instance();
    expect(textField).not.toBeNull();
  });

  describe('Default parser', () => {
    it('should simple set the input value', () => {
      const setter = jest.fn();
      const wrapper = mount(
        <ValidatingInput value="hi" setValue={setter}>{
          ({
            value,
            isError,
            onBlur,
            onChange,
            name,
          }) => <TextField value={value} onBlur={onBlur} onChange={onChange} error={isError} name={name} />
        }</ValidatingInput>
      );

      wrapper.find('input').at(0).simulate('change', { target: { value: 'pizza' } });
      expect(setter).toHaveBeenCalledWith('pizza');
    });
  });

  describe('default formatter', () => {
    it('should simply display a stingified version of the value', () => {
      const wrapper = mount(
        <ValidatingInput value={3} setValue={(_x: number | null) => { }}>{
          ({
            value,
            isError,
            onBlur,
            onChange,
            name,
          }) => <TextField value={value} onBlur={onBlur} onChange={onChange} error={isError} name={name} />
        }</ValidatingInput>
      );

      const textFieldValue = (wrapper.find('input').instance() as any).value;
      expect(textFieldValue).toBe('3');
    });

    it('should return empty string for null/undefined', () => {
      const wrapper = mount(
        <ValidatingInput value={null} setValue={(_x: null) => { }}>{
          ({
            value,
            isError,
            onBlur,
            onChange,
            name,
          }) => <TextField value={value} onBlur={onBlur} onChange={onChange} error={isError} name={name} />
        }</ValidatingInput>
      );

      const textFieldValue = (wrapper.find('input').instance() as any).value;
      expect(textFieldValue).toBe('');
    });

    it('Should throw if the value being formatted is a generic object without a custom toString', () => {
      const Foo = class Foo {
        toString () {
          return 'abadaba';
        }
      };

      const foo = new Foo();
      const wrapper = mount(
        <ValidatingInput value={foo} setValue={(_x) => { }}>{
          ({
            value,
            isError,
            onBlur,
            onChange,
            name,
          }) => {
            console.log("VALUE IS " + value);
            return <TextField value={value} onBlur={onBlur} onChange={onChange} error={isError} name={name} />;
          }
        }</ValidatingInput>
      );

      const textFieldValue = (wrapper.find('input').instance() as any).value;
      expect(textFieldValue).toBe('abadaba');

      const catcher = jest.fn();
      const ErrorB = class ErrorB extends React.Component {
        state = {
          err: null,
        };

        componentDidCatch (err: Error) {
          catcher('' + err);
        }

        static getDerivedStateFromError (err: Error) {
          return { err };
        }

        render () {
          return this.state.err ? <div>Err!</div> : this.props.children;
        }
      }

      mount(
        <ErrorB>
          <ValidatingInput value={{}} setValue={(_x) => { }}>{
            ({
              value,
              isError,
              onBlur,
              onChange,
              name,
            }) => {
              console.log("VALUE IS " + value);
              return <TextField value={value} onBlur={onBlur} onChange={onChange} error={isError} name={name} />;
            }
          }</ValidatingInput>
        </ErrorB>
      );

      expect(catcher).toBeCalledWith('Error: Object cannot be formatted for input value.');
    });
  });
});