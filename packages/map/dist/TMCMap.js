"use strict";
/**
 * TMCMap.tsx
 *
 * @description Leaflet components for TMC React applications.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_leaflet_1 = require("react-leaflet");
const OSM_ATTR = `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`;
const DEFAULT_CENTER = [39.8, -86.16];
const MAP_STYLES = {
    height: "calc(100vh - 64px)",
    width: '100%',
    position: 'absolute',
};
/**
 * @description The TMC leaflet map component.
 *
 * @param [props] The destructured props object.
 * @param props.position {Array} The latlng pair to center the map on.
 * @param props.tileURL {string} The url for the tileset.
 * @param props.initZoom {number} The zoom level to start with.
 * @param props.children {React.ReactNode} The React children.
 * @returns {React.FunctionComponent} The map component.
 */
exports.TMCMap = ({ position = DEFAULT_CENTER, tileURL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', initZoom = 11, children, }) => (react_1.default.createElement(react_leaflet_1.Map, { center: position, zoom: initZoom, style: MAP_STYLES },
    react_1.default.createElement(react_leaflet_1.TileLayer, { attribution: OSM_ATTR, url: tileURL }, children)));
exports.TMCMap.defaultProps = {
    position: DEFAULT_CENTER,
    tileURL: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    initZoom: 11,
    children: undefined,
};
exports.TMCMap.propTypes = {
    position: prop_types_1.default.arrayOf(prop_types_1.default.number),
    tileURL: prop_types_1.default.string,
    initZoom: prop_types_1.default.number,
    children: prop_types_1.default.node,
};
/**
 * @description The TMC leaflet polyline component.
 *
 * @param [props] The destructured props object.
 * @param props.path {Array} The array of latlng pairs to define the geometry.
 * @param props.color {string} The stroke color for the line. Defaults to green.
 * @param props.weight {number} The stroke weight. Defaults to 5.
 * @param props.children {React.ReactNode} The React children.
 * @returns {React.FunctionComponent} The map component.
 */
exports.TMCPoly = ({ path, color = '#0F0', weight = 5, children, }) => (children
    ? (react_1.default.createElement(react_leaflet_1.Polyline, { positions: path, color: color, weight: weight },
        react_1.default.createElement(react_leaflet_1.Popup, null, children))) : (react_1.default.createElement(react_leaflet_1.Polyline, { positions: path, color: color, weight: weight })));
exports.TMCPoly.defaultProps = {
    color: '#0F0',
    weight: 5,
    children: undefined,
};
exports.TMCPoly.propTypes = {
    path: prop_types_1.default.arrayOf(prop_types_1.default.arrayOf(prop_types_1.default.number)).isRequired,
    color: prop_types_1.default.string,
    weight: prop_types_1.default.number,
    children: prop_types_1.default.node,
};
//# sourceMappingURL=TMCMap.js.map