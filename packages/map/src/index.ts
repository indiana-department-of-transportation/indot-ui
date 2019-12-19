/**
 * index.ts
 *
 * @description The main Leaflet for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

// NOTE: this is ridiculous but arguably the best solution
// since leaflet doesn't bundle this upstream.
import 'leaflet/dist/leaflet.css';
import 'leaflet';
import TMCMap from './TMCMap';
import TMCPoly from './TMCPoly';
import TMCMarker from './TMCMarker';
import TMCLeafletBase from './TMCLeafletBase';
import defaultMarkerIcon from './marker-icon';

// Again, leaflet grrh argh.
interface Window {
  L: any,
}
const Leaflet = window.L;

export {
  TMCMap,
  TMCPoly,
  TMCMarker,
  TMCLeafletBase,
  defaultMarkerIcon,
  Leaflet
};

export default TMCMap;
