import React, { useRef } from "react";
import { styles } from "./styles";
export var Input = function (_a) {
    var onChange = _a.onChange;
    var inputRef = useRef(null);
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
    return (React.createElement("div", { style: styles.container },
        React.createElement("input", { ref: inputRef, type: "file", style: styles.input, accept: "image/*", onChange: handleChangeFile }),
        React.createElement("button", { style: styles.clear, onClick: handleClear }, "Clear")));
};
//# sourceMappingURL=Input.js.map