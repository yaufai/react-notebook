"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function SearchBox(props) {
    return (react_1.default.createElement("input", { onChange: function (e) {
            var word = e.target.value;
            var result = props.options.filter(function (option) { return props.filterFunction(word, option); });
            props.onChange(word, result);
        } }));
}
exports.default = SearchBox;
