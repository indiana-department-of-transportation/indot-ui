"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * index.tsx
 *
 * @description Main file for INDOT React Logo components.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2020
 */
const react_1 = __importDefault(require("react"));
const indot_logo_1 = __importDefault(require("./indot-logo"));
/**
 * @description Logo with the Seal of Indiana.
 */
exports.INDOTLogo = () => (react_1.default.createElement("img", { src: `data:image/png;base64, ${indot_logo_1.default}`, alt: "INDOT logo", style: { width: '48px', height: '48px' } }));
exports.default = exports.INDOTLogo;
//# sourceMappingURL=index.js.map