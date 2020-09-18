"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationStyle = void 0;
var react_1 = __importDefault(require("react"));
var Selector_1 = require("./src/Selector");
exports.ExplanationStyle = {
    paddingLeft: "30px",
    marginBottom: "0px",
    marginTop: "10px"
};
exports.default = (function () { return react_1.default.createElement("div", null,
    react_1.default.createElement("p", { style: exports.ExplanationStyle }, "\u4ECA\u5F8C\u52C9\u5F37\u3057\u3066\u307F\u305F\u3044JavaScript\u95A2\u9023\u6280\u8853\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044\u3002"),
    react_1.default.createElement(Selector_1.Selector, { options: [
            { id: "react", label: "React" },
            { id: "vue", label: "Vue" },
            { id: "angular", label: "Angular" },
            { id: "jquery", label: "jQuery" }
        ], onChange: function (value) { return console.log(value); } })); });
