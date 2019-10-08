"use strict";
/**
 * Appbar.test.tsx
 *
 * @description Appbar component tests.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const enzyme_1 = __importStar(require("enzyme"));
const react_router_dom_1 = require("react-router-dom");
const Appbar_1 = __importDefault(require("./Appbar"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe('Appbar', () => {
    it('should render without crashing', () => {
        enzyme_1.mount(react_1.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_1.default.createElement(Appbar_1.default, { title: "" })));
        expect(true).toBe(true);
    });
    it('should have a required title prop that renders in an h6', () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_1.default.createElement(Appbar_1.default, { title: "foobar" })));
        expect(wrapper.find('h6').text().trim()).toBe('foobar');
    });
    it('should take a prop that renders a searchbar', () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_1.default.createElement(Appbar_1.default, { title: "foobar" })));
        expect(wrapper.find('input').length).toBe(0);
        const wrapper2 = enzyme_1.mount(react_1.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_1.default.createElement(Appbar_1.default, { title: "foobar", Searchbar: react_1.default.createElement("input", null) })));
        expect(wrapper2.find('input').length).toBe(1);
    });
    it('should take an Account prop and render it', () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_1.default.createElement(Appbar_1.default, { title: "foobar" })));
        expect(wrapper.find('input').length).toBe(0);
        const wrapper2 = enzyme_1.mount(react_1.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_1.default.createElement(Appbar_1.default, { title: "foobar", Account: react_1.default.createElement("input", null) })));
        expect(wrapper2.find('input').length).toBe(1);
    });
});
//# sourceMappingURL=Appbar.test.js.map