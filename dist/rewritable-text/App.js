"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RewritableText_1 = __importDefault(require("./src/RewritableText"));
exports.default = (function () { return react_1.default.createElement(RewritableText_1.default, { defaultValue: "\u3053\u3053\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u7DE8\u96C6\u3067\u304D\u307E\u3059", displayWhenEmpty: react_1.default.createElement("span", { style: { color: "red" } }, "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7DE8\u96C6\u3092\u958B\u59CB\u3057\u307E\u3059"), onChange: function (v) { return console.log(v); }, onFinalized: function (v) { return console.log("Final: ", v); }, validation: function (v) { return (v.length > 0) && (v.length <= 20); }, validationErrMsg: function (v) {
        if (v.length === 0) {
            return "必ず何か文字列を入力してください";
        }
        else if (v.length > 20) {
            return "20文字より多く入力することはできません";
        }
        else {
            return "";
        }
    } }); });
