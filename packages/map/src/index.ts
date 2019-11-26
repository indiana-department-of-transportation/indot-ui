// NOTE: this is ridiculous but arguably the best solution
// since leaflet doesn't bundle this upstream.
import 'leaflet/dist/leaflet.css';
import 'leaflet';

import { TMCMap, TMCPoly } from './TMCMap';

export { TMCMap, TMCPoly };

export default TMCMap;
