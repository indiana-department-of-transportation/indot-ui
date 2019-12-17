/**
 * TMCMap.test.tsx
 *
 * @description TMC leaflet component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import { Polyline, TileLayer, Popup } from 'react-leaflet';

import { TMCMap, TMCPoly } from './TMCMap';

Enzyme.configure({ adapter: new Adapter() });

// describe('TMCMap', () => {
//   it('should render without crashing', () => {
//     mount(<TMCMap />);
//     expect(true).toBe(true);
//   });

//   it('should take a latlng pair for the initial map center', () => {
//     const wrapper = mount(<TMCMap position={[-89.1, 39.1]} />);
//     expect(wrapper.find(TMCMap).props().position).toEqual([-89.1, 39.1]);
//   });

//   it('should take a different tile URL', () => {
//     // TODO: impl with our tile layer
//   });

//   it('should take an initial zoom level', () => {
//     const wrapper = mount(<TMCMap initZoom={13} />);
//     expect(wrapper.find(TMCMap).props().initZoom).toBe(13);
//   });

//   it('should render appropriate children', () => {
//     const wrapper = mount(<TMCMap><Polyline positions={[[24, 21], [13, 23]]} /></TMCMap>);
//     expect(wrapper.find(TileLayer).length).toBe(1);
//     expect(wrapper.find(TileLayer).props().children.props.positions)
//       .toEqual([[24, 21], [13, 23]]);
//   });
// });

// describe('TMCPoly', () => {
//   it('should render without crashing', () => {
//     mount(<TMCMap><TMCPoly path={[[24, 21], [13, 23]]} /></TMCMap>);
//     expect(true).toBe(true);
//   });

//   it('should take a color property', () => {
//     const wrapper = mount(
//       <TMCMap>
//         <TMCPoly
//           path={[[24, 21], [13, 23]]}
//           color="#ABC"
//         />
//       </TMCMap>
//     );

//     expect(wrapper
//       .find(TileLayer)
//       .props()
//       .children
//       .props
//       .color
//     ).toBe('#ABC');
//   });

//   it('should take a weight property', () => {
//     const wrapper = mount(
//       <TMCMap>
//         <TMCPoly
//           path={[[24, 21], [13, 23]]}
//           weight={2}
//         />
//       </TMCMap>
//     );

//     expect(wrapper
//       .find(TileLayer)
//       .props()
//       .children
//       .props
//       .weight
//     ).toBe(2);
//   });

//   it('should render appropriate children', () => {
//     const wrapper = mount(
//       <TMCMap>
//         <TMCPoly path={[[24, 21], [13, 23]]}>
//           "hello world"
//         </TMCPoly>
//       </TMCMap>
//     );

//     expect(wrapper
//       .find(TileLayer)
//       .props()
//       .children
//       .props
//       .children
//     ).toBe('"hello world"');
//   });
// });
