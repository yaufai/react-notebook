"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectorContext = void 0;
var react_1 = __importDefault(require("react"));
var defaultValue = {
    selected: [],
    select: function (id) { },
    unselect: function (id) { },
    change: function (id) { },
    options: [],
    isSelected: (function (id) { return false; }),
    getOptionById: (function (id) { return { id: "", label: "" }; })
};
exports.SelectorContext = react_1.default.createContext(defaultValue);
