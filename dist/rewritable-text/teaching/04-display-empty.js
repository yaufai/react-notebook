"use strict";
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
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
function RewritableText(props) {
    var _a = react_1.useState(props.defaultValue), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(false), isEditing = _b[0], setIsEditing = _b[1];
    var toggleEditing = function () { return setIsEditing(!isEditing); };
    var text = react_1.default.createElement("div", { onClick: toggleEditing, style: { cursor: "pointer" } },
        react_1.default.createElement("span", { style: { marginRight: "6px" } }, value !== "" ? value : props.displayWhenEmpty),
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPencilAlt }));
    var editor = react_1.default.createElement("input", { value: value, onBlur: function () {
            props.onFinalized(value);
            toggleEditing();
        }, onChange: function (e) {
            var newValue = e.target.value;
            props.onChange(newValue);
            setValue(newValue);
        }, autoFocus: true });
    return isEditing ? editor : text;
}
exports.default = RewritableText;
