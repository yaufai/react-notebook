"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Button1_1 = require("./Button1");
var Button2_1 = require("./Button2");
var Context_1 = require("./Context");
var TopLevel = /** @class */ (function (_super) {
    __extends(TopLevel, _super);
    function TopLevel(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () {
            _this.setState({
                on: !_this.state.on
            });
        };
        _this.state = {
            on: true
        };
        return _this;
    }
    TopLevel.prototype.render = function () {
        return react_1.default.createElement(Context_1.MyContext.Provider, { value: {
                on: this.state.on,
                toggle: this.toggle
            } },
            react_1.default.createElement(Button1_1.Button1, null),
            react_1.default.createElement(Button2_1.Button2, null));
    };
    return TopLevel;
}(react_1.Component));
exports.default = TopLevel;
