// NOTE: this is ridiculous but arguably the best solution
// since leaflet doesn't bundle this upstream.
import 'leaflet/dist/leaflet.css';
import 'leaflet';
import TMCMap from './TMCMap';
import TMCPoly from './TMCPoly';
import TMCMarker from './TMCMarker';
const Leaflet = window.L;
export { TMCMap, TMCPoly, TMCMarker, Leaflet };
export default TMCMap;