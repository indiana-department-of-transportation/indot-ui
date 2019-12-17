// NOTE: this is ridiculous but arguably the best solution
// since leaflet doesn't bundle this upstream.
import 'leaflet/dist/leaflet.css';
import 'leaflet';
import { TMCMap, TMCPoly, TMCMarker } from './TMCMap';

const L = window.L;

export { TMCMap, TMCPoly , TMCMarker, L };

export default TMCMap;
