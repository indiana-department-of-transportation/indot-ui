/**
 * PageContent.test.js
 *
 * @description PageContent component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import "jsdom-global/register";
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

import PageContent from './PageContent';

Enzyme.configure({ adapter: new Adapter() });

describe('PageContent', () => {
  it('should render without crashing', () => {
    shallow(<PageContent title="yo">"hi"</PageContent>);
    expect(true).toBe(true);
  });

  it('should take a title attribute that renders in an H6 tag', () => {
    const wrapper = mount(<PageContent title="yo">"hi"</PageContent>);
    expect(wrapper.find('h6').length).toBe(1);
  });

  it('should render children', () => {
    const wrapper = mount(
      <PageContent title="foo">
        <button type="submit">hi</button>
      </PageContent>,
    );

    expect(wrapper.find('button').length).toBe(1);
  });
});
