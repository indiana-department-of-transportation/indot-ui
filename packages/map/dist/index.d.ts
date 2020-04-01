/**
 * index.ts
 *
 * @description The main Leaflet for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import 'leaflet/dist/leaflet.css';
import 'leaflet';
import TMCMap from './TMCMap';
import TMCPoly from './TMCPoly';
import TMCMarker from './TMCMarker';
import TMCLeafletBase from './TMCLeafletBase';
import defaultMarkerIcon from './marker-icon';
declare const Leaflet: typeof import("leaflet");
export { TMCMap, TMCPoly, TMCMarker, TMCLeafletBase, defaultMarkerIcon, Leaflet };
export default TMCMap;
