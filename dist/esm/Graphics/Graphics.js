import React, { useRef } from "react";
import { styles } from "./styles";
import { creatGraphics } from "./engin/engin";
export var Graphics = function (_a) {
    var source = _a.source;
    var canvasRef = useRef(null);
    var imageRef = useRef(null);
    var wrapRef = useRef(null);
    var onImageLoad = function (event) {
        var image = event.currentTarget;
        if (canvasRef.current) {
            wrapRef.current = creatGraphics(canvasRef.current, image);
        }
    };
    var handleWrap = function () {
        if (wrapRef.current) {
            wrapRef.current();
        }
    };
    return (React.createElement("div", { style: styles.container },
        React.createElement("button", { onClick: handleWrap, style: styles.wrap }, "Wrap"),
        React.createElement("img", { ref: imageRef, style: styles.image, src: source, onLoadCapture: onImageLoad, alt: '' }),
        React.createElement("canvas", { ref: canvasRef, style: styles.canvas })));
};
//# sourceMappingURL=Graphics.js.map