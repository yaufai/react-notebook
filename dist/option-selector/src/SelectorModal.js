"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
var SelectorContext_1 = require("./SelectorContext");
function SelectorModal(props) {
    return react_1.default.createElement(SelectorContext_1.SelectorContext.Consumer, null, function (value) { return react_1.default.createElement(reactstrap_1.Modal, { isOpen: props.isOpen, toggle: props.toggle },
        react_1.default.createElement(reactstrap_1.ModalBody, null,
            react_1.default.createElement(reactstrap_1.ListGroup, null, value.options.map(function (option) {
                var color = value.isSelected(option.id) ? "success" : "";
                return react_1.default.createElement(reactstrap_1.ListGroupItem, { color: color, key: option.id, onClick: function () { return value.change(option.id); } }, option.label);
            })))); });
}
exports.default = SelectorModal;
