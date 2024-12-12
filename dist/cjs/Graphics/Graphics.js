"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphics = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styles_1 = require("./styles");
var engin_1 = require("./engin/engin");
var Graphics = function (_a) {
    var source = _a.source;
    var canvasRef = (0, react_1.useRef)(null);
    var imageRef = (0, react_1.useRef)(null);
    var wrapRef = (0, react_1.useRef)(null);
    var onImageLoad = function (event) {
        var image = event.currentTarget;
        if (canvasRef.current) {
            wrapRef.current = (0, engin_1.creatGraphics)(canvasRef.current, image);
        }
    };
    var handleWrap = function () {
        if (wrapRef.current) {
            wrapRef.current();
        }
    };
    return (react_1.default.createElement("div", { style: styles_1.styles.container },
        react_1.default.createElement("button", { onClick: handleWrap, style: styles_1.styles.wrap }, "Wrap"),
        react_1.default.createElement("img", { ref: imageRef, style: styles_1.styles.image, src: source, onLoadCapture: onImageLoad, alt: '' }),
        react_1.default.createElement("canvas", { ref: canvasRef, style: styles_1.styles.canvas })));
};
exports.Graphics = Graphics;
//# sourceMappingURL=Graphics.js.map