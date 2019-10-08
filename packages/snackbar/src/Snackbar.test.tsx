/**
 * Snackbar.test.tsx
 *
 * @description Searchbar component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import globalThis from '@jasmith79/global-this';

import TMCSnackbar from './Snackbar';
import { emptyFn } from '@jasmith79/ts-utils';

Enzyme.configure({ adapter: new Adapter() });

window.matchMedia = jest.fn((arg: string) => ({
  matches: true,
  addListener: function() {},
  removeListener: function() {},
  addEventListener: function () { },
  removeEventListener: function () { },
  media: '',
  onchange: emptyFn,
  dispatchEvent: function(evt: Event) { return true; },
}));

describe('Snackbar', () => {
  it('should render without crashing', () => {
    mount(<TMCSnackbar message="hi" />);
    expect(true).toBe(true);
  });

  it('should display a message.', () => {
    const wrapper = mount(<TMCSnackbar message="hi" />);
    expect(wrapper.find(TMCSnackbar).props().message).toBe('hi');
  });

  it('should take an optional \'variant\' property', () => {
    const wrapper = mount(
      <TMCSnackbar
        message="hi"
        variant="success"
      />
    );

    expect(wrapper.find(TMCSnackbar).props().variant).toBe('success');
  });

  it('should take an optional \'timeout\' property', () => {
    const wrapper = mount(
      <TMCSnackbar
        message="hi"
        timeout={1000}
      />
    );

    expect(wrapper.find(TMCSnackbar).props().timeout).toBe(1000);
  });

  it('should take an optional \'color\' property', () => {
    const wrapper = mount(
      <TMCSnackbar
        message="hi"
        color="primary"
      />
    );

    expect(wrapper.find(TMCSnackbar).props().color).toBe('primary');
  });

  // it('should take an optional \'action\' property', () => {
  //   const wrapper = mount(
  //     <TMCSnackbar
  //       message="hi"
  //       action={}
  //     />
  //   );

  //   expect(wrapper.find(TMCSnackbar).props().action).toBe();
  // });

  // it('should take an optional \'closer\' property', () => {
  //   const wrapper = mount(
  //     <TMCSnackbar
  //       message="hi"
  //       closer={}
  //     />
  //   );

  //   expect(wrapper.find(TMCSnackbar).props().closer).toBe();
  // });

  it('should take an optional \'verticalAlign\' property', () => {
    const wrapper = mount(
      <TMCSnackbar
        message="hi"
        verticalAlign="bottom"
      />
    );

    expect(wrapper.find(TMCSnackbar).props().verticalAlign).toBe('bottom');
  });

  it('should take an optional \'horizontalAlign\' property', () => {
    const wrapper = mount(
      <TMCSnackbar
        message="hi"
        horizontalAlign="center"
      />
    );

    expect(wrapper.find(TMCSnackbar).props().horizontalAlign).toBe('center');
  });

  it('should take an optional \'onAction\' property', () => {
    const fn = jest.fn();
    const wrapper = mount(
      <TMCSnackbar
        message="hi"
        onAction={fn}
      />
    );

    expect(wrapper.find(TMCSnackbar).props().onAction).toBe(fn);
  });

  it('should take an optional \'onClose\' property', () => {
    const fn = jest.fn();
    const wrapper = mount(
      <TMCSnackbar
        message="hi"
        onClose={fn}
      />
    );

    expect(wrapper.find(TMCSnackbar).props().onClose).toBe(fn);
  });

  it('should take an optional \'className\' property', () => {
    const wrapper = mount(
      <TMCSnackbar
        message="hi"
        className="foo"
      />
    );

    expect(wrapper.find(TMCSnackbar).props().className).toBe('foo');
  });

});