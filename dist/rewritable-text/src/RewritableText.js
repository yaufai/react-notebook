"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var _c = react_1.useState(false), hasError = _c[0], setHasError = _c[1];
    var toggleEditing = function () { return setIsEditing(!isEditing); };
    var finalize = function (e) {
        props.onFinalized(value);
        toggleEditing();
    };
    var onKeyUp = function (e) {
        if (e.key === "Enter" && props.validation(value)) {
            finalize();
        }
    };
    var commonStyle = {
        fontSize: "14px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingRight: "8px",
        paddingLeft: "8px"
    };
    var text = react_1.default.createElement("div", { onClick: toggleEditing, style: { cursor: "pointer" } },
        react_1.default.createElement("span", { style: __assign(__assign({}, commonStyle), { marginRight: "3px" }) }, value !== "" ? value : props.displayWhenEmpty),
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPencilAlt }));
    var editor = react_1.default.createElement("div", null,
        react_1.default.createElement("input", { value: value, onBlur: function (e) {
                if (props.validation(value)) {
                    finalize(e);
                }
            }, onChange: function (e) {
                var newValue = e.target.value;
                props.onChange(newValue);
                setValue(newValue);
                setHasError(!props.validation(newValue));
            }, onKeyUp: onKeyUp, autoFocus: true, style: __assign(__assign({}, commonStyle), { width: "100%" }) }),
        react_1.default.createElement("div", { style: {
                color: "red",
                visibility: hasError ? "visible" : "hidden"
            } }, props.validationErrMsg(value)));
    return isEditing ? editor : text;
}
exports.default = RewritableText;
