"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styles_1 = require("./styles");
var Input = function (_a) {
    var onChange = _a.onChange;
    var inputRef = (0, react_1.useRef)(null);
    var handleClear = function () {
        if (inputRef.current && "value" in inputRef.current) {
            onChange === null || onChange === void 0 ? void 0 : onChange(null);
            inputRef.current.value = "";
        }
    };
    var handleChangeFile = function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                var result = reader_1.result;
                onChange === null || onChange === void 0 ? void 0 : onChange(result);
            };
            reader_1.onerror = function () {
                console.error("Error reading file.");
                handleClear();
            };
            reader_1.readAsDataURL(file);
        }
        else {
            handleClear();
        }
    };
    return (react_1.default.createElement("div", { style: styles_1.styles.container },
        react_1.default.createElement("input", { ref: inputRef, type: "file", style: styles_1.styles.input, accept: "image/*", onChange: handleChangeFile }),
        react_1.default.createElement("button", { style: styles_1.styles.clear, onClick: handleClear }, "Clear")));
};
exports.Input = Input;
//# sourceMappingURL=Input.js.map