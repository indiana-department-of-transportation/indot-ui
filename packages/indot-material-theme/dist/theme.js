"use strict";
/**
 * theme.ts
 *
 * @description Material UI theme for INDOT React projects.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const pink_1 = __importDefault(require("@material-ui/core/colors/pink"));
exports.default = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: '#0c2440',
            light: '#08192c',
            dark: '#3c4f66',
        },
        secondary: {
            main: '#cfa926',
            light: '#d8ba51',
            dark: '#90761a',
            contrastText: '#ffffff',
        },
        error: {
            main: pink_1.default[600],
        },
        background: {
            paper: '#fff',
            default: '#e1e2e1',
        },
    },
    typography: {
        h1: {
            color: '#fff',
        },
        h2: {
            color: '#fff',
        },
        h3: {
            color: '#fff',
        },
        h4: {
            color: '#fff',
        },
        h5: {
            color: '#fff',
        },
        h6: {
            color: '#fff',
        },
    },
});
//# sourceMappingURL=theme.js.map