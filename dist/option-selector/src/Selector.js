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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selector = void 0;
var react_1 = __importStar(require("react"));
var SelectorContext_1 = require("./SelectorContext");
var SelectorModal_1 = __importDefault(require("./SelectorModal"));
var Styles_1 = require("./Styles");
require("bootstrap/dist/css/bootstrap.min.css");
var Selector = /** @class */ (function (_super) {
    __extends(Selector, _super);
    function Selector(props) {
        var _this = _super.call(this, props) || this;
        _this.select = function (id) {
            if (!_this.state.selected.includes(id)) {
                _this.setState({
                    selected: _this.state.selected.concat([id])
                });
            }
        };
        _this.unselect = function (id) {
            _this.setState({
                selected: _this.state.selected.filter(function (s) { return s !== id; })
            });
        };
        _this.change = function (id) {
            if (_this.state.selected.includes(id)) {
                _this.unselect(id);
            }
            else {
                _this.select(id);
            }
        };
        _this.toggle = function () {
            _this.setState({
                isModalOpen: !_this.state.isModalOpen
            });
        };
        _this.getOptionById = function (id) {
            var candidates = _this.props.options.filter(function (option) { return option.id === id; });
            if (candidates.length >= 1) {
                return candidates[0];
            }
            else {
                return undefined;
            }
        };
        _this.getAllSelected = function () {
            return _this.state.selected
                .map(_this.getOptionById)
                .filter(function (option) { return option !== undefined; });
        };
        _this.state = {
            selected: [],
            isModalOpen: false
        };
        return _this;
    }
    Selector.prototype.componentDidUpdate = function () {
        this.props.onChange(this.getAllSelected());
    };
    Selector.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(SelectorContext_1.SelectorContext.Provider, { value: {
                selected: this.state.selected,
                select: this.select,
                unselect: this.unselect,
                options: this.props.options,
                change: this.change,
                isSelected: function (id) { return _this.state.selected.includes(id); },
                getOptionById: this.getOptionById
            } },
            react_1.default.createElement("div", { style: Styles_1.SelectedListStyle, onClick: this.toggle }, this.getAllSelected()
                .map(function (option) { return react_1.default.createElement("div", { style: Styles_1.SelectedItemStyle, key: option.id }, option.label); })),
            react_1.default.createElement(SelectorModal_1.default, { isOpen: this.state.isModalOpen, toggle: this.toggle })));
    };
    return Selector;
}(react_1.Component));
exports.Selector = Selector;
