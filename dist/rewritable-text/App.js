"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RewritableText_1 = __importDefault(require("./src/RewritableText"));
exports.default = (function () { return react_1.default.createElement(RewritableText_1.default, { defaultValue: "\u3053\u3053\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u7DE8\u96C6\u3067\u304D\u307E\u3059", onChange: function (value) { console.log(value); }, onFinalized: function (value) { console.log("GET FINALIZED VALUE: ", value); } }); });
