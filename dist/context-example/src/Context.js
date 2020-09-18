"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyContext = exports.defaultContext = void 0;
var react_1 = __importDefault(require("react"));
exports.defaultContext = {
    on: true,
    toggle: function () { }
};
exports.MyContext = react_1.default.createContext(exports.defaultContext);
