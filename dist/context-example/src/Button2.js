"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button2 = void 0;
var react_1 = __importDefault(require("react"));
var Context_1 = require("./Context");
function Button2() {
    return (react_1.default.createElement(Context_1.MyContext.Consumer, null, function (value) { return react_1.default.createElement("button", { onClick: value.toggle, style: {
            backgroundColor: !value.on ? "black" : "white"
        } }, "2"); }));
}
exports.Button2 = Button2;
